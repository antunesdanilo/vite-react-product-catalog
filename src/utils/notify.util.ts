import { toast } from 'react-hot-toast';

interface IToast {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

const styles = {
  fontWeight: 500,
  color: '#fff',
};

export const notify = ({ type, message }: IToast) => {
  if (type === 'info') {
    return toast(
      message,
      {
        icon: 'ℹ️',
        style: {
          ...styles,
          backgroundColor: '#0471D1',
        },
      },
    );
  }
  if (type === 'warning') {
    return toast(
      message,
      {
        icon: '⚠️',
        style: {
          ...styles,
          backgroundColor: '#ED753E',
        },
      },
    );
  }
  if (type === 'success') {
    return toast.success(message, {
      style: {
        ...styles,
        backgroundColor: '#a2d3a3',
      },
    });
  }
  if (type === 'error') {
    return toast.error(message, {
      style: {
        ...styles,
        backgroundColor: '#FC8E8E',
      },
    });
  }
};