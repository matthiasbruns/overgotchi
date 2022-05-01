import styles from './App.module.css';
import Character from './components/Character/Character';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Character />
      <Title />
      <button
        onClick={() =>
          overwolf.windows.getCurrentWindow((result) => {
            overwolf.windows.close(result.window.id);
          })
        }
      >
        Close
      </button>
    </div>
  );
}

export default App;
