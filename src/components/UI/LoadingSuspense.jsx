/* eslint-disable react/prop-types */
import { Suspense } from "react";
import LoadingEffect from "./LoadingEffect";

const LoadingSuspense = ({ children }) => {
  return <Suspense fallback={<LoadingEffect />}>{children}</Suspense>;
};

export default LoadingSuspense;
