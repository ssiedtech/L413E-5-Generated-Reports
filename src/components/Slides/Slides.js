import React, { useRef, useState, useEffect, useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import { AppContext } from '../../context/AppContext';
import Quiz from 'react-quiz-component';
import { quiz } from '../Quiz/Quiz';
import { Image, Button } from 'react-bootstrap';
import TermsComponent from '../TermsComponent/TermsComponent.js';
import GFEBS from '../../img/GFEBS.png';
import Objectives from '../../img/objectives.png';
import GLAccountBalances from '../../img/GL_Account_Balances.png';
import AbnormalBalanceReport from '../../img/Abnormal_Balance_Report.jpg';
import FederalTransactionRegister from '../../img/Federal_Transaction_Register.jpg';
import reporting from '../../img/reporting.jpg';
import ImportantUserRoles from '../../img/important_user_roles.jpg';
import CashRegister from '../../img/cashregister.jpg';
import report from '../../img/report.png';
import treasury from '../../img/treasury.jpg';
import treasury2 from '../../img/treasury2.jpg';
import ddrsoutbound from '../../img/ddrsoutbound.png';

import gl from '../../img/gl.jpg';
import vl from '../../img/vl.jpg';
import cl from '../../img/cl.jpg';

import sfis from '../../img/sfis.jpg';
import ddrs from '../../img/ddrs.jpg';

import FMCrest from '../../img/fm_crest.png';

function Slides() {
  // State management
  const slideRef = useRef();
  const context = useContext(AppContext);

  const [key, setKey] = useState();
  const [lineItem, setLineItem] = useState(gl);
  const [trialBal, setTrialBal] = useState(sfis);

  // Calculates and sets progress bar percentage after every slide change
  useEffect(() => {
    context.toggleProgress();

    // Removes back arrow on first slide
    if (context.currentSlide === 1) {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav'
      ).style.display = 'none';
    } else {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav'
      ).style.display = 'block';
    }

    // Removes next arrow on final slide
    if (context.currentSlide === context.total) {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav'
      ).style.display = 'none';
    } else {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav'
      ).style.display = 'block';
    }
  }, [context]);

  // On page load, this populates the index dropdown and hides back arrow on page one to
  useEffect(() => {
    context.compileIndex();
  }, []);

  // Changes slide to specific index from dropdown menu
  useEffect(() => {
    slideRef.current.goTo(parseInt(context.currentSlide, 10));
  }, [context.currentSlide]);

  // Resets Quiz key to random number and rerenders it... there's probably a better way to do this.
  function retakeQuiz() {
    return setKey(Math.random());
  }

  // React-Slideshow package settings
  const properties = {
    indicators: false,
    arrows: true,
    autoplay: false,
    defaultIndex: 0,
    canSwipe: false,
    transitionDuration: 300,
    prevArrow: (
      <div style={{ width: '30px', marginRight: '-30px' }}>
        <i className='fas fa-arrow-left'></i>
      </div>
    ),
    nextArrow: (
      <div
        className='next-arrow'
        style={{ width: '30px', marginLeft: '-30px' }}
      >
        <i className='fas fa-arrow-right'></i>
      </div>
    ),
    onChange: (previous, next) => {
      context.onSlideChange(previous, next);
    },
  };

  // Sets post-quiz state
  const onCompleteAction = (obj) => {
    document.querySelector('.next-arrow').style.display = 'block';
    context.onQuizCompletion();
  };

  // Renders custom results page
  const renderCustomResultPage = (obj) => {
    return (
      <div>
        <h4>Well done, you may now continue with the lesson.</h4>
        <button onClick={retakeQuiz} className='btn btn-primary'>
          Retake
        </button>
      </div>
    );
  };

  return (
    <>
      <div
        className='mx-auto my-auto'
        style={{
          top: '300px',
          height: '500px',
          width: '900px',
          backgroundColor: '#f4f4f4',
        }}
      >
        <Slide ref={slideRef} easing='ease' {...properties}>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <h3 className='slide-title'>Welcome to Financial Reporting</h3>
                <span>
                  Welcome to Generated Reports. In this module we will discuss
                  multiple reports used to create financial statements used to
                  interpret transactional data. This data is used to decipher
                  the financial health of the Department of Army.
                </span>
              </div>
              <div className='col'>
                <span>
                  <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
                </span>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>Lesson Objectives</h3>
                  <p>After completing this lesson, you will be able to:</p>
                  <li>Define the purpose of generated reports </li>
                  <li>Identify specific reports</li>
                  <li>
                    Describe the forwarding procedures for generated reports
                  </li>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='' src={Objectives} alt='Objectives' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <h3 className='slide-title ml-3'>Key Terms</h3>
            <TermsComponent />
          </div>
          <div className='slide'>
            <div className='row ml-3 p-3'>
              <div>
                <h3 className='slide-title'>G/L Account Balances Report</h3>
                <p>
                  Use the G/L Account Balances Report to investigate account
                  balance details. It lets you view credit and debit amounts,
                  and total debit and credit amounts, of a range of G/L accounts
                  during a specific period.
                </p>
                <p>Transaction Code (T Code): F.08</p>
              </div>
              <div className='col d-flex justify-content-center'>
                <Image
                  fluid
                  className=' gl-account-balances'
                  src={GLAccountBalances}
                  alt='GL Account Balances'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Abnormal Balance Report (1 of 5)
                  </h3>
                  <p>
                    The Abnormal Balance Report is used by the FI business
                    process area during the Period-End and Year-End Close
                    processes to identify and review G/L accounts that have
                    abnormal balances.
                  </p>
                  <p>An account has an abnormal balance when:</p>
                  <ul>
                    <li>
                      It is a type that should post a debit balance, but it
                      posts a credit balance instead
                    </li>
                    <li>
                      The account is a type that should post a credit balance,
                      but it posts a debit balance instead.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                {' '}
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row pt-3 pl-3 pr-3 m-1'>
              <div>
                <h3 className='slide-title'>
                  Abnormal Balance Report (2 of 5)
                </h3>
                <p>
                  The normal balance for each USSGL account is determined by
                  Treasury and is pre-programmed in GFEBS. This report checks
                  the balance of each G/L account and compares it with the
                  balance of the corresponding USSGL normal balance. The report
                  then identifies which G/L accounts do not match their expected
                  balance.
                </p>
                <p>Transaction Code (T Code): ZSFI_ABMORMAL_BALRPT</p>
              </div>
            </div>
            <div className='col d-flex justify-content-center'>
              <Image
                fluid
                className='abnormal-balance-report'
                src={AbnormalBalanceReport}
                alt='Abnormal Balance Report'
              />
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Abnormal Balance Report (3 of 5)
                  </h3>
                  <p>
                    The Abnormal Balance Report can be run for any of the
                    following:
                  </p>
                  <ul>
                    <li>A specific fund</li>
                    <li>By installation</li>
                    <li>By appropriation</li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Abnormal Balance Report (4 of 5)
                  </h3>
                  <p>
                    Research the abnormal balances identified in this report to
                    ensure the abnormal balance condition is a result of valid
                    transactions. To do this, you can drill down on the abnormal
                    balance line item to display and view details like:
                  </p>
                  <ul>
                    <li>G/L Account</li>
                    <li>Document Number</li>
                    <li>Fund</li>
                    <li>Application of Fund</li>
                    <li>Company Code</li>
                    <li>Transaction Amount</li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Abnormal Balance Report (5 of 5)
                  </h3>
                  <p>
                    The Abnormal Balance Report can also be run at the following
                    levels:
                  </p>
                  <ul>
                    <li>G/L Summary Level</li>
                    <li>Detailed G/L Account Level</li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row pt-3 pl-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Federal Transaction Register Report (1 of 3)
                  </h3>
                  <p>
                    Use the Federal Transaction Register Report to review all
                    credit and debit postings in GFEBS. A transaction register
                    captures data at a document and line item level for all
                    financial postings to the General Ledger. The report lists
                    which fund, fund center, commitment item, and accounts a
                    transaction is posted to in GFEBS.
                  </p>
                  <p>Transaction Code (T Code): FMFG_E_TRANS_REG</p>
                </div>
              </div>
              <Image
                fluid
                className='federal-transaction-register'
                src={FederalTransactionRegister}
                alt='Federal Transaction Register'
              />
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Federal Transaction Register Report (2 of 3)
                  </h3>
                  <p>
                    The Federal Transaction Register Report lists the following
                    for financial documents that are posted in GFEBS:
                  </p>
                  <ul>
                    <li>Fund</li>
                    <li>Fund center</li>
                    <li>Commitment item</li>
                    <li>Account number </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Federal Transaction Register Report (3 of 3)
                  </h3>
                  <p>Report Filters</p>
                  <p>
                    When running this report, you have the flexibility to view
                    transactions associated with:
                  </p>
                  <ul>
                    <li>A specific fund</li>
                    <li>A fund center</li>
                    <li>A commitment item</li>
                    <li>A particular G/L account</li>
                  </ul>
                  <p>
                    This report is also a drill-down report, which allows you to
                    double-click on the line item to view detailed information
                    about the financial document.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>Line Item Reports (1 of 3)</h3>
                  <p>
                    A line item is the part of a financial document in GFEBS
                    containing accounting and transaction amount information
                    about a single item. It includes:{' '}
                  </p>
                  <ul>
                    <li>The amount</li>
                    <li>An account number</li>
                    <li>The assignment to debits or credits</li>
                    <li>
                      Additional specifications that depend on the business
                      transactions that were posted
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                {' '}
                <Image
                  fluid
                  className='py-5 mt-5'
                  src={reporting}
                  alt='Reporting'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col-12'>
                <div>
                  <h3 className='slide-title'>Line Item Reports (2 of 3)</h3>
                  <p>
                    Line item reports allow you to search by line items for open
                    or cleared line items, depending on which type of line items
                    you want to view. The report pulls the appropriate line
                    items, depending on the selections you specify on the
                    initial screen. The three main line item reports used by the
                    FI business process area are:
                  </p>
                  <div className='row'>
                    <div className='col-4 justify-content-center text-center'>
                      <Button onClick={(e) => setLineItem(gl)}>
                        <span>G/L Account Line Item Report </span>
                      </Button>
                      <span>Transaction Code (T Code): FBL3N</span>
                    </div>
                    <div className='col-4 justify-content-center text-center'>
                      <Button onClick={(e) => setLineItem(vl)}>
                        <span>Vendor Line Item Report</span>
                      </Button>
                      <span>Transaction Code (T Code): FBL1N</span>
                    </div>
                    <div className='col-4 justify-content-center text-center'>
                      <Button onClick={(e) => setLineItem(cl)}>
                        <span>Customer Line Item Report</span>
                      </Button>
                      <span>Transaction Code (T Code): FBL5N</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div>
                  <Image
                    fluid
                    className='line-item ml-5 mt-1'
                    src={lineItem}
                    alt='Line Item Reports'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>Line Item Reports (3 of 3)</h3>
                  <p>
                    The G/L Account Line Item Report shows all the G/L account
                    line items that are open, cleared, or posted, depending on
                    specifications. Similarly, the Vendor Line Item Report and
                    Customer Line Item Report show vendor and customer line
                    items, respectively, which are open, cleared, or posted.
                  </p>
                </div>
              </div>

              <div className='col'>
                <Image
                  fluid
                  className='py-5'
                  src={ImportantUserRoles}
                  alt='Important User Roles'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Line Item Reports and Cash Balancing (1 of 3)
                  </h3>
                  <p>
                    The FI business process area uses all three of these line
                    item reports during the Cash Balancing process. When GFEBS
                    receives Defense Cash Accountability System (DCAS) inbound
                    files containing cash transactions to be posted in GFEBS,
                    the interface automatically matches transactions to their
                    corresponding entries and clears them. The GFEBS interface
                    also posts any transactions that do not have a match as
                    "unmatched transactions."
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image
                  fluid
                  className='py-5'
                  src={CashRegister}
                  alt='Cash Register'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Line Item Reports and Cash Balancing (2 of 3)
                  </h3>
                  <p>
                    To view the documents posted as unmatched by this interface,{' '}
                    <b>the Cash Balancing Processor</b> runs the G/L Line Item
                    Report and searches the line items by "document type." To
                    find a match for the document,{' '}
                    <b>the Cash Balancing Processor</b> then runs the Vendor or
                    Customer Line Item Report, depending on whether a matching
                    vendor invoice or customer bill is required. By running this
                    additional line item report, required. By running this
                    additional line item report,{' '}
                    <b>the Cash Balancing Processor</b> required. By running
                    this additional line item report, can view open items that
                    may be a possible match for the unmatched G/L document.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Line Item Reports and Cash Balancing (3 of 3)
                  </h3>
                  <p>
                    To view the documents posted as unmatched by this interface,{' '}
                    <b>the Cash Balancing Processor</b> runs the G/L Line Item
                    Report and searches the line items by "document type." To
                    find a match for the document, the{' '}
                    <b>Cash Balancing Processor</b> then runs the Vendor or
                    Customer Line Item Report, depending on whether a matching
                    vendor invoice or customer bill is required. By running this
                    additional line item report, the
                    <b>Cash Balancing Processor</b> can view open items that may
                    be a possible match for the unmatched G/L document.
                  </p>
                </div>
              </div>
              <div className='col'>
                {' '}
                <Image fluid className='py-5' src={report} alt='Report' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Treasury Report on Receivables (1 of 3)
                  </h3>
                  <p>
                    The TROR is a report that the U.S. Treasury requires from
                    U.S. Government agencies to provide a status of debt due
                    from the public. It serves as a management report that
                    informs Federal decision-makers of the gross book value of
                    the receivables owed to Federal agencies, and the status of
                    the Federal Government's debt portfolio. The figures
                    provided in the TROR reconcile with each agency's financial
                    statements for the month.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col-7'>
                <div>
                  <h3 className='slide-title'>
                    Treasury Report on Receivables (2 of 3)
                  </h3>
                  <p>
                    All DoD agencies are required to provide the data required
                    for the TROR report to DDRS at the end of each month. In
                    GFEBS, the data required for the TROR is sent to DDRS via
                    the TROR interface. The Financial Reviewer can manually
                    execute this interface, or it can be scheduled to run each
                    month at a certain date and time. The External Information
                    Monitor is responsible for making sure this interface is
                    sent on time. DDRS takes the TROR data it receives from each
                    Defense Agency and consolidates it into a single TROR for
                    Treasury at the end of each period. DDRS also generates the
                    Monthly Receivables Data (MRD) report using the data
                    included in the GFEBS TROR. The MRD shows receivables by
                    category and age.{' '}
                  </p>
                  <p>
                    The information contained in the TROR and Debt Collection
                    Activities is sent to Congress, the Office of Management and
                    Budget (OMB), agency Chief Financial Officers, other
                    officials and representatives of Federal and state
                    organizations, concerned private sector organizations, and
                    the public.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image
                  fluid
                  className='mt-5 py-5'
                  src={treasury}
                  alt='Treasury Report'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Treasury Report on Receivables <br />
                    (3 of 3)
                  </h3>
                  <p>
                    Note: In GFEBS, there are two TROR reports. The first is the
                    Standard TROR report included with GFEBS. The second is a
                    TROR reporting interface developed specifically for GFEBS.
                    This custom TROR report structures TROR data according to
                    DDRS reporting requirements.
                  </p>
                  <p>
                    Although the custom TROR report is the version sent to DDRS
                    via interface, you may need to run the standard TROR report
                    to validate the data in the custom TROR interface and
                    reconcile differences. This course will teach you to run the
                    Custom TROR reporting interface. If you are the{' '}
                    <b>Financial Reviewer</b> and need to run the standard TROR
                    report for validation purposes, use the Treasury Report on
                    Receivables Online Help Procedure. It provides detailed work
                    instructions for running the report.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image
                  fluid
                  className='mt-5 py-5'
                  src={treasury2}
                  alt='Treasury Report'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Trial Balance in GFEBS (1 of 4)
                  </h3>
                  <p>
                    Recall that GFEBS does not create its own financial
                    statements. Instead, it sends a Trial Balance to DDRS, which
                    then produces the Army's financial statements for the
                    period.
                  </p>
                  <p>
                    The GFEBS Trial Balance reflects the complete financial
                    picture for Army general funds. To provide complete
                    information for the entire Army, information from other
                    sources, such as inventory management, property management,
                    and Army investments are retrieved/interfaced to GFEBS to
                    update and support the Trial Balance.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='GFEBS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row pt-3 pl-3 pr-3 m-1'>
              <div className='col'>
                <h3 className='slide-title'>Trial Balance in GFEBS (2 of 4)</h3>
                <p>
                  The Trial Balance is segmented into two separate reports with
                  different transactions codes. The following highlights the
                  differences:
                </p>
                <p>
                  The Trial Balance by Fund at the SGL Account Level which does
                  not include SFIS attributes.
                </p>
                <p>Transaction Code (T Code): ZSFI_DDRS_TRL_BAL</p>

                <p>
                  The SFIS Trial Balance, a trial balance which incorporates
                  SFIS attributes.
                </p>
                <p>Transaction Code (T Code): ZSFI_SFISREPORT</p>
              </div>
              <div className='row'>
                <div className='col-4 pb-2 justify-content-center text-center'>
                  <Button onClick={(e) => setTrialBal(ddrs)}>
                    <span>DDRS</span>
                  </Button>
                </div>
                <div className='col-4 ml-2 justify-content-center text-center'>
                  <Button onClick={(e) => setTrialBal(sfis)}>
                    <span>SFIS</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className='col d-flex justify-content-center'>
              <Image
                fluid
                className='trial-bal'
                src={trialBal}
                alt='Trial Balance'
              />
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col-7'>
                <div>
                  <h3 className='slide-title'>
                    Trial Balance in GFEBS (3 of 4)
                  </h3>
                  <p>Trial Balance at the Full Account Level:</p>
                  <p>
                    This Trial Balance includes the balances for all of the
                    Army's point accounts. For instructions on running this
                    trial balance, reference the Trial Balance by Fund at the
                    Full Account Level Online Help Procedure. This will walk you
                    through each step involved in running this Trial Balance at
                    the GFEBS Full Account Level (i.e. 4.4, eight-digit level).
                  </p>
                  <p>The DDRS Outbound Trial Balance:</p>
                  <p>
                    This Trial Balance includes Defense Reporting Elements
                    (DRE). This Trial Balance with Defense Reporting Elements
                    (DRE) is a subset of SFIS. This Trial Balance is sent via
                    interface to DDRS at the end of each month to report the
                    Army General Fund financial status. Refer to L414:
                    Period-End Closing and L415 Year-End Closing for detailed
                    information on executing the interface that sends this final
                    Trial Balance to DDRS.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image
                  fluid
                  className='py-5'
                  src={ddrsoutbound}
                  alt='DDRS Outbound Trial Balance'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <h3 className='slide-title'>Trial Balance in GFEBS (4 of 4)</h3>
                <p>
                  After the closing activities in the Period-End and Year-End
                  processes are complete, the <b>Financial Reviewer</b> runs the
                  Trial Balance by Fund at the SGL Account Level to see if all
                  ending account balances add up to zero. If the net balance of
                  the Trial Balance by Fund at the SGL account level is not
                  zero, the out of balances must be researched and corrected.
                  The Trial Balance by Fund at the SGL Account Level shows the
                  balances of the four-digit SGL accounts.
                </p>
                <p>
                  If necessary, the <b>Financial Reviewer</b> may also run the
                  SFIS Trial Balance to show the fund balance by SFIS attribute.
                </p>
                <p>
                  If the net balance of the SGL Trial Balance is zero, the
                  <b> External Information Monitor</b> runs the DDRS outbound
                  interface, which sends the final Trial Balance with Defense
                  Reporting Elements (DRE) to DDRS. If the net balance of the
                  SGL Trial Balance is not zero, the out of balances must be
                  researched and corrected. The net balance of the SGL Trial
                  Balance must be zero prior to sending the final Trial Balance
                  to DDRS.
                </p>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <h3 className='slide-title'>
                  DDRS Produced Reports and Statements
                </h3>
                <p>
                  With the GFEBS Trial Balance, DDRS produces the following
                  reports for the Army:
                </p>
                <p>
                  <b>AFS (Audited Financial Statements)</b>
                </p>
                <ul>
                  <li>Balance Sheet</li>
                  <li>Statement of Net Cost</li>
                  <li>Statement of Changes in Net Position</li>
                  <li>Statement of Budgetary Resources </li>
                  <li>Variance Reports</li>
                </ul>
              </div>
              <div className='col'>
                <p>
                  <b>Budgetary Reports</b>
                </p>
                <ul>
                  <li>
                    SF133 Report on Budget Execution and Budgetary Resources
                  </li>
                  <li>FMS 2108 Year-end Closing Statement</li>
                  <li>AR(M) 1307 Cash Flow, Financial Position</li>
                  <li>
                    AR(M) 1002 Report on Appropriation Status by Fiscal Year
                    Program and Sub-accounts
                  </li>
                  <li>AR (M) 725</li>
                  <li>SF 132 Apportionment and Re-apportionment Schedule</li>
                  <li>Treasury Report on Receivables</li>
                  <li>Monthly Receivable Data (MRD)</li>
                  <li>FACTS II Exports</li>
                  <li>BEX Exports</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <Quiz
                  quiz={quiz}
                  key={key}
                  continueTillCorrect={true}
                  showDefaultResult={false}
                  onComplete={onCompleteAction}
                  customResultPage={renderCustomResultPage}
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col-6'>
                <div>
                  <h3 className='slide-title'>Summary</h3>
                  <p>
                    This concludes the Generated Reports module. In this module,
                    we covered key reports populated with transactional data
                    used to create financial statements, transaction codes for
                    the reports, and provided a defined purpose.{' '}
                  </p>
                  <p>You now should be able to:</p>
                  <ul>
                    <li>Define the purpose of generated reports </li>
                    <li>Identify specific reports</li>
                    <li>
                      Describe the forwarding procedures for generated reports
                    </li>
                  </ul>
                  <p>
                    You may exit this module by clicking the <b>Exit</b> button
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image className='p-5' fluid src={FMCrest} alt='FM Crest' />
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Slides;
