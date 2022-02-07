import Exercise     from "./models/exercise"
import Muscle       from "./models/muscle"
import Trainer      from "./models/trainer"
import Program      from "./models/program"
import ProgramSet   from "./models/program-set"


export async function init_data() {
    let m_1 = new Muscle({name: 'm1', order: 0}); await m_1.save()
    let m_2 = new Muscle({name: 'm2', order: 1}); await m_2.save()
    let m_3 = new Muscle({name: 'm3', order: 2}); await m_3.save()
    let m_4 = new Muscle({name: 'm4', order: 3}); await m_4.save()

    let t_1 = new Trainer({name: 't1'}); await t_1.save()
    let t_2 = new Trainer({name: 't2'}); await t_2.save()
    let t_3 = new Trainer({name: 't3'}); await t_3.save()
    let t_4 = new Trainer({name: 't4'}); await t_4.save()

    let e_1 = new Exercise({name: 'Присед'          , order: 0, trainer_id: t_1.id, muscle_id: m_1.id}); await e_1.save()
    let e_2 = new Exercise({name: 'Жим лежа'        , order: 1, trainer_id: t_1.id, muscle_id: m_2.id}); await e_2.save()
    let e_3 = new Exercise({name: 'Подтягивание'    , order: 2, trainer_id: t_2.id, muscle_id: m_4.id}); await e_3.save()
    let e_4 = new Exercise({name: 'Махи в сторону'  , order: 3, trainer_id: t_2.id, muscle_id: m_4.id}); await e_4.save()

    let p_1 = new Program({name: 'Грудь', order: 1}); await p_1.save()
    let p_2 = new Program({name: 'Cпина', order: 2}); await p_2.save()
    let p_3 = new Program({name: 'Ноги' , order: 3}); await p_3.save()
    let p_4 = new Program({name: 'Плечи', order: 0}); await p_4.save()

    let ps_1 = new ProgramSet({program_id: p_1.id, exercise_id: e_1.id, order: 1, reps: 10, weight: 10}); await ps_1.save()
    let ps_2 = new ProgramSet({program_id: p_1.id, exercise_id: e_2.id, order: 2, reps: 10, weight: 10}); await ps_2.save()
    let ps_3 = new ProgramSet({program_id: p_1.id, exercise_id: e_2.id, order: 3, reps: 10, weight: 10}); await ps_3.save()
    let ps_4 = new ProgramSet({program_id: p_1.id, exercise_id: e_1.id, order: 4, reps: 10, weight: 10}); await ps_4.save()

    let ps_5 = new ProgramSet({program_id: p_2.id, exercise_id: e_4.id, order: 1, reps: 10, weight: 10}); await ps_5.save()
    let ps_6 = new ProgramSet({program_id: p_2.id, exercise_id: e_3.id, order: 2, reps: 10, weight: 10}); await ps_6.save()
}
