import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const NotificationPanel = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  
  const detailedNotifications = [
    {
      title: "Reminder 1",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "Reminder",
      details: "Details for Reminder 1",
      timestamp: "2023-05-27 09:30 AM",
      recipient: "John Doe",
      priority: "Low",
    },
    {
      title: "Issue Resolution",
      summary: "Nulla facilisi. Mauris vel finibus neque.",
      type: "Issue Resolution",
      details: "Details for Issue Resolution",
      timestamp: "2023-05-28 02:15 PM",
      recipient: "Jane Smith",
      priority: "High",
    },
    {
      title: "Bank Announcement",
      summary: "Sed pulvinar ligula eget tortor vulputate ultrices.",
      type: "Bank Announcement",
      details: "Details for Bank Announcement",
      timestamp: "2023-05-29 11:45 AM",
      recipient: "Alex Johnson",
      priority: "Medium",
    },
    {
      title: "Reminder 2",
      summary: "Vestibulum eget lectus at tortor rhoncus scelerisque.",
      type: "Reminder",
      details: "Details for Reminder 2",
      timestamp: "2023-05-30 10:00 AM",
      recipient: "Emily Davis",
      priority: "Medium",
    },
    {
      title: "Issue Resolution 2",
      summary: "Proin sit amet magna scelerisque, fermentum elit eget.",
      type: "Issue Resolution",
      details: "Details for Issue Resolution 2",
      timestamp: "2023-05-31 03:45 PM",
      recipient: "Michael Johnson",
      priority: "High",
    },
  {
    title: "Bank Announcement 2",
    summary: "Donec pharetra turpis eget laoreet lacinia.",
    type: "Bank Announcement",
    details: "Details for Bank Announcement 2",
    timestamp: "2023-06-01 09:30 AM",
    recipient: "Sarah Thompson",
    priority: "Low",
  },
  {
    title: "Reminder 3",
    summary: "Praesent a ex id libero fringilla fermentum.",
    type: "Reminder",
    details: "Details for Reminder 3",
    timestamp: "2023-06-02 01:45 PM",
    recipient: "Robert Johnson",
    priority: "Medium",
  },
  {
    title: "Issue Resolution 3",
    summary: "Suspendisse sed augue id nunc commodo tristique.",
    type: "Issue Resolution",
    details: "Details for Issue Resolution 3",
    timestamp: "2023-06-03 10:15 AM",
    recipient: "Emma Wilson",
    priority: "High",
  },
  {
    title: "Bank Announcement 3",
    summary: "Aliquam aliquam purus in turpis interdum, at sollicitudin.",
    type: "Bank Announcement",
    details: "Details for Bank Announcement 3",
    timestamp: "2023-06-04 02:30 PM",
    recipient: "Christopher Davis",
    priority: "Low",
  },
  {
    title: "Reminder 4",
    summary: "Etiam malesuada nisl at odio iaculis, non rutrum nunc.",
    type: "Reminder",
    details: "Details for Reminder 4",
    timestamp: "2023-06-05 11:00 AM",
    recipient: "Olivia Johnson",
    priority: "Medium",
  },
  {
    title: "Issue Resolution 4",
    summary: "Vivamus eu arcu ut neque ullamcorper molestie.",
    type: "Issue Resolution",
    details: "Details for Issue Resolution 4",
    timestamp: "2023-06-06 04:15 PM",
    recipient: "Daniel Thompson",
    priority: "High",
  },
  {
    title: "Bank Announcement 4",
    summary: "Fusce tristique odio vitae ipsum faucibus, eget dignissim.",
    type: "Bank Announcement",
    details: "Details for Bank Announcement 4",
    timestamp: "2023-06-07 09:45 AM",
    recipient: "Sophia Wilson",
    priority: "Medium",
  },
  {
    title: "Reminder 5",
    summary: "Quisque laoreet augue ac metus semper, vel aliquet.",
    type: "Reminder",
    details: "Details for Reminder 5",
    timestamp: "2023-06-08 12:30 PM",
    recipient: "William Davis",
    priority: "Low",
  },
  {
    title: "Issue Resolution 5",
    summary: "Curabitur vel lacus commodo, consectetur ipsum sed.",
    type: "Issue Resolution",
    details: "Details for Issue Resolution 5",
    timestamp: "2023-06-09 03:00 PM",
    recipient: "Ava Thompson",
    priority: "High",
  },
  {
    title: "Bank Announcement 5",
    summary: "Nunc cursus dolor nec leo luctus, eu sagittis.",
    type: "Bank Announcement",
    details: "Details for Bank Announcement 5",
    timestamp: "2023-06-10 10:45 AM",
    recipient: "James Johnson",
    priority: "Medium",
  },
];
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredNotifications = detailedNotifications.filter((notification) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return notification.type === selectedCategory;
    }
  });

  const paginatedNotifications = filteredNotifications.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPage(0);
  };

  const handleViewNotification = (notification) => {
    setSelectedNotification(notification);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box display="flex">
      <Paper sx={{ width: 200, p: 2, backgroundColor: "#172554", color: "#FFFFFF" }}>
        <Typography variant="h6" gutterBottom>
          Categories
        </Typography>
        <List component="nav">
          <ListItem button onClick={() => handleCategorySelect("All")} selected={selectedCategory === "All"}>
            <ListItemText primary="All" />
          </ListItem>
          <ListItem button onClick={() => handleCategorySelect("Reminder")} selected={selectedCategory === "Reminder"}>
            <ListItemText primary="Reminders" />
          </ListItem>
          <ListItem button onClick={() => handleCategorySelect("Issue Resolution")} selected={selectedCategory === "Issue Resolution"}>
            <ListItemText primary="Issue Resolution" />
          </ListItem>
          <ListItem button onClick={() => handleCategorySelect("Bank Announcement")} selected={selectedCategory === "Bank Announcement"}>
            <ListItemText primary="Bank Announcements" />
          </ListItem>
        </List>
      </Paper>
      <Paper sx={{ flex: 1, p: 2, backgroundColor: "#F0F2F5" }}>
        <Typography variant="h6" gutterBottom>
          Notifications
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Summary</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedNotifications.map((notification, index) => (
                <TableRow key={index}>
                  <TableCell>{notification.title}</TableCell>
                  <TableCell>{notification.summary}</TableCell>
                  <TableCell>{notification.type}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        backgroundColor: "#172554",
                        color: "#FFFFFF",
                      }}
                      onClick={() => handleViewNotification(notification)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredNotifications.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog open={openModal} onClose={handleCloseModal}>
  {selectedNotification && (
    <>
      <DialogTitle>{selectedNotification.title}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ marginBottom: '16px' }}>
          {selectedNotification.summary}
        </DialogContentText>
        <Typography variant="body1" sx={{ marginBottom: '8px' }}>
          <strong>Details:</strong> {selectedNotification.details}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '8px' }}>
          <strong>Date:</strong>{' '}
          {new Date(selectedNotification.timestamp).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '8px' }}>
          <strong>Recipient:</strong> {selectedNotification.recipient}
        </Typography>
        <Typography variant="body1">
          <strong>Priority:</strong> {selectedNotification.priority}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} color="primary">
          Close
        </Button>
      </DialogActions>
    </>
  )}
</Dialog>


    </Box>
  );
};

export default NotificationPanel;
