// 1 react js html 
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Ayo belajar React bersama!</p>
      </div>
    );
  }
}

export default App;
// 2 menambahkan css 
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* tambahkan class ke tag h1 */}
        <h1 className="title">Hello World</h1>
        <p>Ayo belajar React bersama!</p>
      </div>
    );
  }
}

export default App;

// 4 react menampilkan component 

import React from 'react';
// import component Language 
import Language from './Language.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Languages</h1>
        <div className="language">
          {/* panggil component Language */}
          <Language/>
          <Language />
           <Language /> {/*panggil yang banyak mas  */}
        </div>
      </div>
    );
  }
}

export default App;

// 5 meneruskan props  

import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Languages</h1>
        <div className='language'>
          {/* tambahkan props untuk HTML & CSS */}
          <Language 
            name = "HTML & CSS"
            image = "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg"
            
          />
          {/* tambahkan props untuk JavaScript */}
          <Language 
            name = "JavaScript"
            image = "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg"
            
          />
          {/* tambahkan props untuk React */}
          <Language 
          name = "React"
          image = "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg"
            
            
          />
        </div>
      </div>
    );
  }
}

export default App;
