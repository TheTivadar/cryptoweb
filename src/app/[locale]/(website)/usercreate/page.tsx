import { auth } from '@/auth';
import NewUserForm from '@/components/prisma/addUser';
import { getUserByEmail } from '@/lib/users';
import { redirect } from 'next/navigation';
import React from 'react'

const userCreate = async() => {
  const session = await auth();
  if (!session || !session.user || typeof session.user.email !== 'string') {
      console.error("Invalid session or user data");
      return (
          <div>Error: Unable to create user</div>
      );
  }
  const normalUser = await getUserByEmail(session.user.email);
  if (normalUser === null) {
      await NewUserForm(session);
      redirect("/dashboard");
  }else {
    redirect("/dashboard")
  }
}

export default userCreate