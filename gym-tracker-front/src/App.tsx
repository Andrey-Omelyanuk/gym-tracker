import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ProgramItem from './pages/main/program.item';
import WorkoutHistory from './pages/main/workout-history';
import WorkoutPlan from './pages/main/workout-plan';
import WorkoutRun from './pages/main/workout-run';
import ProgramListPage from './pages/main/program.list.page';
import ProgramCreate from './pages/main/program.create';
import ModelPage from './components/admin/model.page';

import Exercise from './models/exercise';
import Muscle from './models/muscle';
import Trainer from './models/trainer';

setupIonicReact();

const App: React.FC = () => {
    return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

            <Route path="/program/list">        <ProgramListPage/>      </Route> 
            <Route path="/program/item/:__id">  <ProgramItem/>      </Route> 
            <Route path="/program/create">      <ProgramCreate/>    </Route> 
            <Route path="/program-exercise/item/:__id">  <ProgramCreate/>    </Route> 
            <Route path="/program-exercise/create">      <ProgramCreate/>    </Route> 

            <Route path="/workout/history">   <WorkoutHistory/></Route> 
            <Route path="/workout/plan">      <WorkoutPlan/>  </Route> 
            <Route path="/workout/run">       <WorkoutRun/>   </Route> 

            <Route path="/exercise/" render={(props) => <ModelPage {...props} model={Exercise}/>    }></Route> 
            <Route path="/muscle/"   render={(props) => <ModelPage {...props} model={Muscle}/>      }></Route> 
            <Route path="/trainer/"  render={(props) => <ModelPage {...props} model={Trainer}/>     }></Route> 

            <Route path="/" exact={true}><Redirect to="/program/list" /></Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
