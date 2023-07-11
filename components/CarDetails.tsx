import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CarProps } from '@/types';

interface CarDetailsProps {
  isOpen: boolean;
  car: CarProps;
  closeModal: () => void;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
