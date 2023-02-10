import { routes } from 'processes/routes';
import { Suspense, FC, PropsWithChildren } from 'react';
import { useRoutes } from 'react-router-dom';
import { WithProviders } from './providers';
import { Spin } from 'antd';
import { LayoutGame } from 'processes/layout';
import { TAppProps } from './types';
import './index.css';

const Application = () => {
  const router = useRoutes(routes);
  return (
    <Suspense fallback={<Spin />}>
      <LayoutGame>{router}</LayoutGame>
    </Suspense>
  );
};

export const AppWithProviders: FC<PropsWithChildren<TAppProps>> = ({
  isSSR,
  scope,
}) => {
  return (
    <WithProviders isSSR={isSSR} scope={scope}>
      <Application />
    </WithProviders>
  );
};
