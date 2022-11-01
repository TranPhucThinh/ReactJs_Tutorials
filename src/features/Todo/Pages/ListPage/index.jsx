import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useMemo } from 'react';

ListPage.propTypes = {};

function ListPage() {
  const initTodoList = [
    {
      id: 1,
      title: 'code',
      status: 'new',
    },
    {
      id: 2,
      title: 'eat',
      status: 'completed',
    },
    {
      id: 3,
      title: 'sleep',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);

  const [filteredTodo, setFilteredTodo] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredTodo(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  const handleShowClickAll = () => {
    // setFilteredTodo('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowClickNew = () => {
    // setFilteredTodo('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowClickCompleted = () => {
    // setFilteredTodo('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const listFiltered = useMemo(() => {
    return todoList.filter(
      (todo) => filteredTodo === 'all' || filteredTodo === todo.status
    );
  }, [todoList, filteredTodo]);

  return (
    <div>
      <TodoList todoList={listFiltered} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowClickAll}>All</button>
        <button onClick={handleShowClickNew}>New</button>
        <button onClick={handleShowClickCompleted}>Completed</button>
      </div>
    </div>
  );
}

export default ListPage;
