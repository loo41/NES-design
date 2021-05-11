import React, { useEffect, useState } from 'react';
import { useMenus, Link } from 'docz';
import styles from './index.module.scss';
import classNames from 'classnames';

const Navigation: React.FC<{ filterText: string }> = ({ filterText }) => {
  const menus = useMenus();
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (window.location.pathname) {
      setPathname(`/${window.location.pathname.split('/').pop()}`);
    }
  }, []);

  return (
    <div className={styles.menus}>
      {menus.map(({ name, menu }) => {
        const filterMenus = menu?.filter(({ name }) =>
          name
            .split('/')
            .some(t => t.toLowerCase().includes(filterText.toLowerCase())),
        );
        return (
          <>
            {!!filterMenus?.length && <div className={styles.menu}>{name}</div>}
            {filterMenus?.map(({ route, name }) => {
              const subMenuClassNames = classNames({
                [styles.subMenu]: true,
                [styles.routeMenu]: pathname === route,
              });
              return (
                <Link to={route} className={subMenuClassNames} key={route}>
                  {name}
                </Link>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default Navigation;
