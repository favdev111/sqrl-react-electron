// @flow
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import SidebarAccount from '../containers/Sidebar/Account';

import UserProfile from './Wallet/Status/Profile';

import WalletPanel from './Wallet/Panel';
import WalletStatus from './Wallet/Status';

type Props = {
  accounts: {},
  actionHistories: {},
  actions: {},
  balances: {},
  balances: {},
  blockExplorers: {},
  globals: {},
  keys: {},
  settings: {},
  system: {},
  tables: {},
  transaction: {},
  validate: {},
  wallet: {},
};

export default class Wallet extends Component<Props> {
  props: Props;

  render() {
    const {
      actionHistories,
      actions,
      accounts,
      balances,
      blockExplorers,
      chain,
      connection,
      globals,
      keys,
      rex,
      settings,
      system,
      tables,
      transaction,
      validate,
      wallet
    } = this.props;
    return (
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <UserProfile 
              actions={actions}
              accounts={accounts}
              balances={balances}
              blockExplorers={blockExplorers}
              connection={connection}
              globals={globals}
              keys={keys}
              rex={rex}
              settings={settings}
              system={system}
              transaction={transaction}
              validate={validate}
              wallet={wallet}
            />
            <WalletPanel
              actions={actions}
              accounts={accounts}
              balances={balances}
              blockExplorers={blockExplorers}
              globals={globals}
              keys={keys}
              rex={rex}
              settings={settings}
              system={system}
              transaction={transaction}
              validate={validate}
              wallet={wallet}
              connection={connection}
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <WalletStatus
              actions={actions}
              actionHistories={actionHistories}
              accounts={accounts}
              balances={balances}
              blockExplorers={blockExplorers}
              chain={chain}
              connection={connection}
              globals={globals}
              keys={keys}
              rex={rex}
              settings={settings}
              system={system}
              tables={tables}
              transaction={transaction}
              validate={validate}
              wallet={wallet}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
