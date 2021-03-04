import React from 'react';
import './TermsComponent.css';

class TermsComponent extends React.Component {
  state = {
    term: '',
    definition: '',
  };

  onClickButton1 = () => {
    this.setState({
      term: 'Abnormal Balance Report',
      definition:
        'This report, which is run at the end of each period, contains all G/L account-abnormal balances. An account has an abnormal balance when an account that should post a debit balance posts a credit balance–and the reverse–when an account that should post a credit balance posts a debit balance. The report identifies which G/L accounts do not match their expected balance.',
    });
  };

  onClickButton2 = () => {
    this.setState({
      term: 'G/L Account Balance Report',
      definition:
        'This report is used to view credit and debit amounts, and total debit and credit amounts, of a G/L account by reporting period. Use this report to investigate account balance details. It also is a drill-down report, which enables you to click on a G/L transaction amount line to view the G/L document that made up that transaction amount.',
    });
  };

  onClickButton3 = () => {
    this.setState({
      term: 'Gross Book Value',
      definition:
        'The gross amount at which the receivable asset appears on the account books. The gross book value is the amount that appears in a receivable account prior to applying the applicable valuation allowances for doubtful accounts.',
    });
  };

  onClickButton4 = () => {
    this.setState({
      term: 'Treasury Report on Receivables (TROR)',
      definition:
        'A report that the U.S. Treasury requires from U.S. Government agencies that provides a status of their portion of the public debt owed to the Government.',
    });
  };

  onClickButton5 = () => {
    this.setState({
      term: 'Standard Financial Information Structure (SFIS) Trial Balance',
      definition:
        'A Trial Balance customized for GFEBS that includes SFIS attributes required by DoD reporting standards. SFIS classifications are comprehensive "common business language" elements that support information and data requirements for budgeting, financial accounting, cost/performance management, and external reporting across DoD enterprises. They identify and define data elements for external reporting.',
    });
  };

  onClickButton6 = () => {
    this.setState({
      term:
        'Trial Balance by Fund at the Standard General Ledger Account Level (SGL)',
      definition:
        'A Trial Balance that displays the balances of the four digits, summary level SGL Accounts by Fund.',
    });
  };

  onClickButton7 = () => {
    this.setState({
      term: 'Defense Departmental Reporting System (DDRS) Interface',
      definition:
        'The point of interconnection between two data systems. For example, an interface that enables GFEBS to communicate with and transfer data to an outside system, such as Defense Cash Accountability System (DCAS).',
    });
  };

  render() {
    return (
      <div className='terms-container-row'>
        <div className='definition-container'>
          <p>{this.state.term}</p>
          <p>{this.state.definition}</p>
        </div>
        <div className='terms-container-column'>
          <button className='terms-button' onClick={this.onClickButton1}>
            Abnormal Balance Report
          </button>
          <button className='terms-button' onClick={this.onClickButton2}>
            G/L Account Balance Report
          </button>
          <button className='terms-button' onClick={this.onClickButton3}>
            Gross Book Value
          </button>
          <button className='terms-button' onClick={this.onClickButton4}>
            Treasury Report on Receivables (TROR)
          </button>
          <button className='terms-button' onClick={this.onClickButton5}>
            Standard Financial Information Structure (SFIS) Trial Balance
          </button>
          <button className='terms-button' onClick={this.onClickButton6}>
            Trial Balance by Fund at the Standard General Ledger Account Level
            (SGL)
          </button>
          <button className='terms-button' onClick={this.onClickButton7}>
            Defense Departmental Reporting System (DDRS) Interface
          </button>
        </div>
      </div>
    );
  }
}

export default TermsComponent;
