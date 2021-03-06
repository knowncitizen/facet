import React, { FC } from 'react';
import { PageSidebar, Nav, NavList, NavItem } from '@patternfly/react-core';
import { connect } from 'react-redux';

import { WizardStep } from '../models/wizard';
import { RootState } from '../store/rootReducer';

interface ClusterWizardStepsProps {
  currentStep: WizardStep;
}

const ClusterWizardSteps: FC<ClusterWizardStepsProps> = ({
  currentStep
}: ClusterWizardStepsProps): JSX.Element => {
  const nav = (
    <Nav
      onToggle={() => {}}
      onSelect={() => {}}
      aria-label="Cluster deployment wizard steps"
    >
      <NavList>
        <NavItem
          id="cluster-wizard-steps-cluster-setup"
          to="#"
          itemId={0}
          isActive={currentStep === WizardStep.ClusterSetup}
        >
          1. Cluster setup
        </NavItem>
        <NavItem
          id="cluster-wizard-steps-add-hosts"
          to="#"
          itemId={1}
          isActive={currentStep === WizardStep.AddHosts}
        >
          2. Add hosts
        </NavItem>
        <NavItem
          id="cluster-wizard-steps-results"
          to="#"
          itemId={2}
          isActive={currentStep === WizardStep.Results}
        >
          3. Results
        </NavItem>
      </NavList>
    </Nav>
  );
  return <PageSidebar nav={nav} />;
};

const mapStateToProps = (state: RootState): { currentStep: WizardStep } => ({
  currentStep: state.clusterWizard.step
});
export default connect(mapStateToProps)(ClusterWizardSteps);
