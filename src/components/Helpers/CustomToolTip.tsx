import React from 'react';
import { Tooltip } from 'antd';

interface Align {
  offset?: [number, number];
  targetOffset?: [number, number];
  overflow?: { adjustX?: boolean; adjustY?: boolean };
  points?: [string, string];
}

interface CustomTooltipProps {
  sidebarOpen: boolean;
  title: string;
  placement?: 'top' | 'left' | 'right' | 'bottom';
  color?: string;
  align?: Align;
  children: React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  sidebarOpen,
  title,
  placement = 'right',
  color = 'rgba(255, 255, 255, 1)',
  align,
  children
}) => {
  if (sidebarOpen) {
    return <>{children}</>;
  }

  return (
    <Tooltip title={title} placement={placement} color={color} align={align}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
