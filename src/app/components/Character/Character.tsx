import { useEffect } from 'react';
import { useRive, useStateMachineInput } from 'rive-react';
import { EventType } from '@rive-app/canvas';
import styles from './Character.module.css';

const Character = (): JSX.Element => {
  const { rive, RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    stateMachines: 'bumpy',
    autoplay: true,
    // We can pass the call back to the `useRive` hook
    onStateChange: (event) => {
      if (typeof event.data === 'string') {
        console.log(event.data[0]);
      }
    },
  });

  const bumpInput = useStateMachineInput(rive, 'bumpy', 'bump');

  // We can also pass the callback to the rive object once it has loaded.
  // NOTE: If you pass the callback to the rive object, you do not need to
  // pass it to the useRive hook as well, and vice versa.
  useEffect(() => {
    if (rive) {
      rive.on(EventType.StateChange, (event) => {
        if (typeof event.data === 'string') {
          console.log(event.data[0]);
        }
      });
    }
  }, [rive]);

  return (
    <RiveComponent
      className={styles.character}
      onClick={() => bumpInput && bumpInput.fire()}
    />
  );
};

export default Character;
