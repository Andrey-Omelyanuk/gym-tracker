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
import TrainerItem from './pages/main/trainer-item';
import TrainerList from './pages/main/trainer-list';
import MuscleItem from './pages/main/muscle-item';
import MuscleList from './pages/main/muscle-list';
import ExerciseItem from './pages/main/exercise-item';
import ExerciseList from './pages/main/exercise-list';
import WorkoutHistory from './pages/main/workout-history';
import WorkoutPlan from './pages/main/workout-plan';
import WorkoutRun from './pages/main/workout-run';
import WorkoutCreate from './pages/main/program.create';
import ProgramList from './pages/main/program.list';
import ProgramCreate from './pages/main/program.create';

import { init_data } from './init_data';

setupIonicReact();

// TODO: it is a bad place for it

const App: React.FC = () => {

    init_data();

    return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

            <Route path="/program/list">        <ProgramList/>      </Route> 
            <Route path="/program/item/:__id">  <ProgramItem/>      </Route> 
            <Route path="/program/create">      <ProgramCreate/>    </Route> 
            <Route path="/program-exercise/item/:__id">  <ProgramCreate/>    </Route> 
            <Route path="/program-exercise/create">      <ProgramCreate/>    </Route> 

            <Route path="/workout/history">   <WorkoutHistory/></Route> 
            <Route path="/workout/plan">      <WorkoutPlan/>  </Route> 
            <Route path="/workout/run">       <WorkoutRun/>   </Route> 
            <Route path="/exercise/list">     <ExerciseList/> </Route> 
            <Route path="/exercise/item/:id"> <ExerciseItem/> </Route> 
            <Route path="/muscle/list">       <MuscleList/>   </Route> 
            <Route path="/muscle/item/:id">   <MuscleItem/>   </Route> 
            <Route path="/trainer/list">      <TrainerList/>  </Route> 
            <Route path="/trainer/item/:id">  <TrainerItem/>  </Route> 
            <Route path="/" exact={true}>     <Redirect to="/program/list" /> </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
