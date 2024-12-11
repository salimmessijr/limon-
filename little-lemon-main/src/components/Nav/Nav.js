import NavDesktop from "../NavDesktop/NavDesktop";
import NavMobile from "../NavMobile/NavMobile";
import classNames from "classnames";
import "./nav.scss";

const namespace = "ui-core-nav";

const Nav = () => {
  return (
    <div className={classNames(namespace)}>
      <div className="mobile">
        <NavMobile namespace={namespace} />
      </div>
      <div className="desktop">
        <NavDesktop namespace={namespace} />
      </div>
    </div>
  );
};

export default Nav;
