import React from 'react';
import styles from "./SearchBox.module.css"

const SearchBox = ({  value , onFilter }) => {
  return (
      <div className={styles.box}>
      <div className={styles.container}>
          <p className={styles.label}>Find contacts by name</p>
          <input className={styles.input}
            type="text"
            value={value}
              onChange={(e) => onFilter(e.target.value)}
        />
    </div>
      </div>
  )
}

export default SearchBox