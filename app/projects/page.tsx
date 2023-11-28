import {Card, CardHeader, CardBody, Image , CardFooter, Link} from "@nextui-org/react";
import NextLink from "next/link";

const page = () => {
  return (
    <div className='text-white '>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
    <Card isPressable isHoverable className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/profile.jpg"
          width={300}
        />
      </CardBody>
      <CardFooter>
        <h2 className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi autem sed quae iste a quaerat deserunt quibusdam illum vero voluptatibus. Saepe recusandae nisi </h2>
      </CardFooter>
    </Card>
    <Card isPressable isHoverable className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/profile.jpg"
          width={300}
        />
      </CardBody>
      <CardFooter>
        <h2 className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi autem sed quae iste a quaerat deserunt quibusdam illum vero voluptatibus. Saepe recusandae nisi </h2>
      </CardFooter>
    </Card>
    <Card isPressable isHoverable className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/profile.jpg"
          width={300}
        />
      </CardBody>
      <CardFooter>
        <h2 className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi autem sed quae iste a quaerat deserunt quibusdam illum vero voluptatibus. Saepe recusandae nisi </h2>
      </CardFooter>
    </Card>
    <Card isPressable isHoverable className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/profile.jpg"
          width={300}
        />
      </CardBody>
      <CardFooter>
        <h2 className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi autem sed quae iste a quaerat deserunt quibusdam illum vero voluptatibus. Saepe recusandae nisi </h2>
      </CardFooter>
    </Card>
    <Card isPressable isHoverable className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/profile.jpg"
          width={300}
        />
      </CardBody>
      <CardFooter>
        <h2 className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi autem sed quae iste a quaerat deserunt quibusdam illum vero voluptatibus. Saepe recusandae nisi </h2>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}

export default page
