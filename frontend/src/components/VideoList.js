import React, { useState, useEffect } from 'react';
import { fetchVideos } from '../services/api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField, Button } from '@mui/material';

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('published_at'); // Default sorting by date
    const [sortOrder, setSortOrder] = useState('desc'); // Default: newest first

    useEffect(() => {
        fetchVideos().then(setVideos);
    }, []);

    // Handle pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Filter and sort videos
    const filteredVideos = videos
        .filter((video) =>
            video.title.toLowerCase().includes(search.toLowerCase()) ||
            video.description.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            } else {
                return a[sortBy] < b[sortBy] ? 1 : -1;
            }
        });

    return (
        <div style={{ padding: '20px' }}>
            <h2>Latest Videos</h2>
            
            {/* Search Bar */}
            <TextField
                label="Search Videos"
                variant="outlined"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: '15px' }}
            />

            {/* Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>ID</strong></TableCell>
                            <TableCell><strong>Thumbnail</strong></TableCell>
                            <TableCell>
                                <Button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                                    <strong>Title {sortBy === 'title' ? (sortOrder === 'asc' ? '🔼' : '🔽') : ''}</strong>
                                </Button>
                            </TableCell>
                            <TableCell><strong>Description</strong></TableCell>
                            <TableCell>
                                <Button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                                    <strong>Published At {sortBy === 'published_at' ? (sortOrder === 'asc' ? '🔼' : '🔽') : ''}</strong>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredVideos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((video) => (
                            <TableRow key={video.video_id}>
                                <TableCell>{video.id}</TableCell>
                                <TableCell>
                                    <img src={video.thumbnail_url} alt={video.title} width="100" />
                                </TableCell>
                                <TableCell>{video.title}</TableCell>
                                <TableCell>{video.description}</TableCell>
                                <TableCell>{new Date(video.published_at).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination Controls */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={filteredVideos.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default VideoList;
