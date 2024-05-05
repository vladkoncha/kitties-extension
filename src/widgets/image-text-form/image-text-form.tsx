import styles from './styles.module.css';

export const ImageTextForm = () => {
  return (
    <div className={styles['form-container']}>
      <form>
        <label htmlFor="text">Текст</label>
        <input type="text" maxLength={50} name="text" id="text" />
        <label htmlFor="size">Размер</label>
        <input type="number" min="10" max="200" name="size" id="size" />
        <label htmlFor="body">Цвет</label>
        <input
          type="color"
          id="text-color"
          name="text-color"
          value="#ffffff"
          list="color-list"
        />
        <datalist id="color-list">
          <option value="red" />
          <option value="green" />
          <option value="blue" />
          <option value="brown" />
          <option value="yellow" />
        </datalist>
      </form>
    </div>
  );
};
