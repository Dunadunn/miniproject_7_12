$(function() {
    // Update current time every second
    setInterval(updateCurrentTime, 1000);
  
    // Show current time on the page
    function updateCurrentTime() {
      const currentTime = dayjs().format("MMM DD, YYYY [at] hh:mm:ss A");
      $('#current-time').text(currentTime);
    }
  });
  
  $(function() {
    // Update current time every second
    setInterval(updateCurrentTime, 1000);
  
    // Show current time on the page
    function updateCurrentTime() {
      const currentTime = dayjs().format("MMM DD, YYYY [at] hh:mm:ss A");
      $('#current-time').text(currentTime);
    }
  
    // Capture form data and add project to table
    $('#projectForm').submit(function(event) {
      event.preventDefault();
  
      const projectName = $('#projectName').val();
      const projectType = $('#projectType').val();
      const dueDate = $('#dueDate').val();
  
      // Create a new table row with the project data
      const newRow = $('<tr>');
      newRow.append($('<td>').text(projectName));
      newRow.append($('<td>').text(projectType));
      newRow.append($('<td>').text(dueDate));
  
      // Add the new row to the project list
      $('#project-list').append(newRow);
  
      // Clear the form inputs
      $('#projectName').val('');
      $('#projectType').val('');
      $('#dueDate').val('');
  
      // Close the modal
      $('#projectModal').modal('hide');
    });
  });
  