import { Card, Container } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import dbConnect from "../db/db-connect";
import { getAllCategories } from "../db/repositories/category.repository";
import CategoryDto from "../dtos/category.dto";
import { categoryState } from "../state/category/category.state";
import store, { RootState } from "../state/store";

export default function Home() {
  const categories = useSelector<RootState, CategoryDto[]>(state => state.category.categories || [])

  return (
    <motion.div initial={{ y: -200 }} animate={{ y: 0, transition: { duration: .3 } }}>
      <Header />
      <Container>
        {
          categories.map(category => (
            <Card key={category.id} style={{ marginTop: '16px', width: '200px', padding: '32px', textAlign: 'center' }}>
              <i className={category.icon.value} />
            </Card>
          ))
        }
      </Container>

    </motion.div>
  )
}

export const getServerSideProps = store.getServerSideProps(async ({ store }) => {
  await dbConnect();

  // const course = await new Course({
  //   title: 'Babel basics'
  // }).save()

  // await createCategory({
  //   title: 'Babel',
  //   icon: {
  //     type: IconType.Icon,
  //     value: 'devicon-babel-plain colored'
  //   },
  //   courses: [course]
  // })
  const categories = await getAllCategories("courses")
  store.dispatch(categoryState.actions.setCategories(categories))
});

