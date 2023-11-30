import classes from "./loadingEffect.module.css";
const LoadingEffect = () => {
  return (
    <div className={`${classes.container} d-flex-cc`}>
      <div className={classes.dottedLoading}></div>
    </div>
  );
};

export default LoadingEffect;
