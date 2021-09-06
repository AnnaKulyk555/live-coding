/* eslint-disable */

// внутренний объект в котором хранятся все переменные которые есть в коде

/*
   // global
   {
    'environmentRecord': {
    'message' : 'Test',
    'weight' : 55,
    'createMessenger' : func,
    ....
    },
    'outherLexicalEnv' : null
   }  

   // createMessanger 
   {
      'environmentRecord': {
          'message': 'Just learn it',
          'sender' : 'Gromcode',
          'sendMessage': func,
      } 
      'outherLexicalEnv' : global
   }

   // run
   {
       'environmentRecord': {}
       'outherLexicalEnv' : global
   }

   // sendMessage 
   {
       'enviromentRecord' : {},
       'outherLexicalEnv' : createMessenger
   }
*/

const message = 'Test message';
const weight = 55;

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

if (true) {
  const currentDay = 'Monday';
  console.log(message);
}

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
messanger1.sendMessage('Andrey');
messanger1.setSender('Nova poshta');

const messanger2 = createMessenger();
messanger2.setSender('Rozetka');
messanger2.sendMessage('Denis');
messanger2.sendMessage('Yevgen');

const messanger3 = createMessenger();

run();
