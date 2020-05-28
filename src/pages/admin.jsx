import React, { useState, useEffect } from 'react';
import CRUDTable from '../components/CRUDTable/CRUDTable';
import { getMoviesTableData, getGenreTableData, getLocationTableData, getRatingTableData, getUserTableData } from '../api';

export const AdminPage = () => {
    const [table, setTable] = useState('Movies');
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        loader(table);
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

    const loader = (table) => {
        if (table === 'Movies') return loadMovies();
        if (table === 'Genres') return loadGenres();
        if (table === 'Locations') return loadLocations();
        if (table === 'Users') return loadUsers();
        if (table === 'Ratings') return loadRatings();
    };

    return (
        <div className="admin-page">
            <div className="container">
                <div className="admin-page-header">
                    <ul className="admin-tables">
                        <li onClick={() => changeTable('Movies')}>Movies</li>
                        <li onClick={() => changeTable('Users')}>Users</li>
                        <li onClick={() => changeTable('Genres')}>Genres</li>
                        <li onClick={() => changeTable('Locations')}>Locations</li>
                        <li onClick={() => changeTable('Ratings')}>Ratings</li>
                    </ul>
                </div>
                <div className="admin-page-table">
                    <div className="admin-page-table-title">
                        {table}
                    </div>
                    {table === 'Movies' && <CRUDTable name={table} data={tableData} />}
                    {table === 'Users' && <CRUDTable name={table} data={tableData} />}
                    {table === 'Genres' && <CRUDTable name={table} data={tableData} />}
                    {table === 'Locations' && <CRUDTable name={table} data={tableData} />}
                    {table === 'Ratings' && <CRUDTable name={table} data={tableData} />}
                </div>
            </div>
        </div>
    )
};

export default AdminPage;