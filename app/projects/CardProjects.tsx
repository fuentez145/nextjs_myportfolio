"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image as NextUIImage,
  CardFooter,
  Link,
  Chip,
} from "@nextui-org/react";

import { TbBrandNextjs } from "react-icons/tb";

import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const staggerVariants = {
  hidden: {
    opacity: 0,
    x : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  }
}

const CardProjects = ({
  project,
  index,
}: {
  project: ProjectProps;
  index: number;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <motion.div variants={staggerVariants} initial="hidden" animate="visible" transition={{
        delay: index * 0.1,
        duration : 0.5,
        ease: 'easeInOut'
      }} >
      <Card
        onPress={onOpen}
        key={index}
        isPressable
        isHoverable
        className="py-4 h-full"
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
          <small className="text-default-500">
            {/* <div className="flex gap-1 flex-wrap ">
              <Chip startContent={<TbBrandNextjs  size="sm" />} variant="flat" color="default">NextJS</Chip>
              <Chip  variant="flat" color="primary">Primary</Chip>
              <Chip variant="flat" color="secondary">Secondary</Chip>
              <Chip  variant="flat" color="success">Success</Chip>
              <Chip variant="flat" color="warning">Warning</Chip>
              <Chip  variant="flat" color="danger">Danger</Chip>
            </div>{" "} */} <Chip startContent={<TbBrandNextjs  size="sm" />} variant="flat" color="default">NextJS</Chip>
          </small>
          <h4 className="font-bold text-large">{project.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <NextUIImage
            as={Image}
            alt="Card background"
            className="object-cover rounded-xl"
            src={project.image}
            width={300}
            height={300}
          />
        </CardBody>
        <CardFooter>
          <h2 className="text-md">{project.description}</h2>
        </CardFooter>
      </Card>
      </motion.div>
      <Modal
        placement="center"
        size="4xl"
        className="text-white"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {project.title}
              </ModalHeader>
              <ModalBody >
               <div className="flex items-center justify-center">
               <Image className="rounded-lg" alt={project?.title} src={project.image} width={400} height={400} />
               </div>
                {project.description}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardProjects;
