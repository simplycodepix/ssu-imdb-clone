import React, { useState, useEffect } from 'react';
import CRUDTable from '../components/CRUDTable/CRUDTable';
import { getMoviesTableData, getGenreTableData, getLocationTableData, getRatingTableData, getUserTableData, deleteFromTable } from '../api';
import { MOVIES, GENRES, LOCATIONS, USERS, RATINGS } from '../store/types';
import { useHistory } from 'react-router-dom';

export const AdminPage = () => {
    const [table, setTable] = useState(MOVIES);
    const [tableData, setTableData] = useState([]);
    let history = useHistory();

    useEffect(() => {
        if (table === MOVIES) loadMovies();
        if (table === GENRES) loadGenres();
        if (table === LOCATIONS) loadLocations();
        if (table === USERS) loadUsers();
        if (table === RATINGS) loadRatings();
    }, [table]);

    const loadMovies = async () => {
        const { movies } = await getMoviesTableData();
        setTableData(movies);
    }

    const changeTable = (table) => {
        setTable(table);
    }

    const loadUsers = async () => {
        const { users } = await getUserTableData();
        setTableData(users);
    }

    const loadLocations = async () => {
        const { locations } = await getLocationTableData();
        setTableData(locations);
    }
    const loadRatings = async () => {
        const { ratings } = await getRatingTableData();
        setTableData(ratings);
    }

    const loadGenres = async () => {
        const { genres } = await getGenreTableData();
        setTableData(genres);
    }

    const deleteItem = async ({ tableName, data }) => {
        setTable('Loading');
        await deleteFromTable({ table: tableName, payload: data });
        setTable(tableName);
    }

    const editItem = ({ tableName, data }) => {
        if (tableName === RATINGS) {
            history.push(`${tableName}/${data.movie_id}-${data.user_id}/edit`)
            return;
        }
        history.push(`${tableName}/${data.id}/edit`)
    }

    return (
        <div className="admin-page">
            <div className="container">
                <div className="admin-page-header">
                    <ul className="admin-tables">
                        <li onClick={() => changeTable(MOVIES)}>Movies</li>
                        <li onClick={() => changeTable(USERS)}>Users</li>
                        <li onClick={() => changeTable(GENRES)}>Genres</li>
                        <li onClick={() => changeTable(LOCATIONS)}>Locations</li>
                        <li onClick={() => changeTable(RATINGS)}>Ratings</li>
                    </ul>
                </div>
                <div className="admin-page-table">
                    <div className="admin-page-table-title">
                        {table}
                    </div>
                    {table && tableData && <CRUDTable deleteItem={deleteItem} editItem={editItem} name={table} data={tableData} />}
                </div>
            </div>
        </div>
    )
};

export default AdminPage;