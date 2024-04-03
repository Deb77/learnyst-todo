import { Component } from 'react';
import pageStyles from '../../page.module.css';
import Pill from './subcomponents/Pill';
import Spacer from '../common/Spacer';
import styles from './taskList.module.css';
import ListItem from './subcomponents/ListItem';

export class TaskList extends Component {
  render() {
    return (
      <>
        <h3 className={pageStyles.heading}>To do tasks</h3>
        <Spacer height={30} />
        <div className={styles['pills-container']}>
          <Pill text={'All'} />
          <Pill text={'Done'} />
          <Pill text={'To Do'} />
        </div>
        <Spacer height={30} />
        <div className={styles.listItemsContainer}>
          <ListItem
            title={'Complete project proposal for upcoming client meeting'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={true}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={true}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={true}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={true}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={true}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={false}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={true}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={false}
          />

          <Spacer height={10} />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={true}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={false}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={true}
          />
          <Spacer height={10} />
          <ListItem
            title={'Review and respond to emails in inbox.'}
            description={'Presentation regarding future of Artificial Intelligence.'}
            completed={false}
          />
        </div>
      </>
    );
  }
}

export default TaskList;
