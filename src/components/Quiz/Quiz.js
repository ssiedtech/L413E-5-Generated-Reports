export const quiz = {
  quizTitle: 'Check on Learning',
  questions: [
    {
      question: 'What is the purpose of the G/L Account Balances Report?',
      questionType: 'text',
      answers: [
        'To identify which G/L accounts do not match their expected balance',
        'Look for accounts with an abnormal balance',
        'Ensure an abnormal balance is the result of valid transactions',
        'View the balance of a specific G/L account or range of G/L accounts',
      ],
      correctAnswer: '4',
      answerSelectionType: 'single',
    },
    {
      question:
        'During which process do you typically use the Abnormal Balance Report?',
      answers: [
        'During the Cash Balancing and Period-End Close processes',
        'During the Trial Close process',
        'During the Cash Balancing and Year-End Close processes',
        'During the Period-End Close and Year-End Close processes',
      ],
      questionType: 'text',
      correctAnswer: '4',
    },
    {
      question:
        'A ____________ is a part of a financial document containing accounting information on a single item.',
      answers: ['Credit item', 'Line item', 'Single addendum', 'Single spec'],
      correctAnswer: '2',
      questionType: 'text',
    },
    {
      question: 'During which process does FI primarily run line item reports?',
      answers: [
        'Report Balancing',
        'Line Item Balancing',
        'Cash Balancing',
        'Account Balancing',
      ],
      correctAnswer: '3',
      questionType: 'text',
    },
    {
      question: 'Who is responsible for running the TROR?',
      answers: [
        'The Financial Reviewer',
        'The Cash Balancing Processor',
        'Federal and state organizations',
        'OMB',
      ],
      correctAnswer: '1',
      questionType: 'text',
    },
    {
      question:
        'The TROR is an optional report provided by corporate entities to the U.S. Treasury.',
      answers: ['True', 'False'],
      correctAnswer: '2',
      questionType: 'text',
    },
    {
      question:
        'A _______________ lists all G/L accounts in an organization’s Operating Chart of Accounts and the respective balances as of a specific closing date.',
      answers: [
        'Period-End Close',
        'Balance Sheet',
        'Trial Balance',
        'Year-End Close',
      ],
      correctAnswer: '3',
      questionType: 'text',
    },
    {
      question:
        'The Trial Balance is run as part of which two processes in GFEBS?',
      answers: [
        'The Period-End and Year-End Close processes',
        'The Period-End and Year-End Open processes',
        'The Period-Start and Year-Start Close processes',
        'The Period-Start and Year-Start Open processes',
      ],
      correctAnswer: '1',
      questionType: 'text',
    },
  ],
};
