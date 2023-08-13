import { DefaultButton } from "@fluentui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import RootRouter from "..";

export default function ErrorPage() {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
}

  return (
    <div id="error-page" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <h1>Oops!</h1>
      <p style={{marginTop: '16px'}}>Sorry, an unexpected error has occurred.</p>
      <p style={{marginTop: '16px', fontWeight: '700', color: 'red'}}>
        <i>{error?.statusText || error?.message}</i>
      </p>
        <DefaultButton style={{marginTop: '16px'}} onClick={() => RootRouter.navigate('/')}>Go Home</DefaultButton>
    </div>
  );
}