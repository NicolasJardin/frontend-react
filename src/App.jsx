import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import Pagination from "./components/pagination/Pagination";
import Row from "./components/row/Row";
import Table from "./components/table/Table";
import api from "./services/api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const token =
    "32076aa84dcb8091eb0e9884c2f8235943c02a4ae061304baac1a68969035fee";

  const getPosts = async () => {
    try {
      const response = await api.get(
        `posts?_format=json&access-token=${token}&page=${currentPage}`
      );
      setTotalPages(response.data.meta.pagination.pages);
      setPosts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [currentPage]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Card title="Últimas postagens">
          <Table
            columns={[
              {
                name: "Titulo",
                small: true,
              },
              {
                name: "Conteúdo",
              },
            ]}
          >
            {posts.map((post) => (
              <Row key={post.id}>
                <td>
                  <span>{post.title}</span>
                </td>
                <td>
                  <span>{post.body}</span>
                </td>
              </Row>
            ))}
            <tr>
              <td colSpan="2">
                <Pagination
                  quantity={posts.length}
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onChangePage={setCurrentPage}
                />
              </td>
            </tr>
          </Table>
        </Card>
      </main>
    </div>
  );
};

export default App;
