      // Basic function to create table
        function createTable() {
            var rows = document.getElementById('rows').value;
            var columns = document.getElementById('columns').value;
            var tableContainer = document.getElementById('tableContainer');
            
            // Clear previous table
            tableContainer.innerHTML = '';
            
            // Create table element
            var table = document.createElement('table');
            table.border = '1';
            table.cellPadding = '10';
            
            // Create rows and columns
            for (var i = 1; i <= rows; i++) {
                var tr = document.createElement('tr');
                
                for (var j = 1; j <= columns; j++) {
                    var td = document.createElement('td');
                    td.innerHTML = 'Row-' + i + ' Column-' + j;
                    tr.appendChild(td);
                }
                
                table.appendChild(tr);
            }
            
            tableContainer.appendChild(table);
        }
        
        // AI-enhanced function to create table with dynamic content
        async function createAITable() {
            var rows = document.getElementById('rows').value;
            var columns = document.getElementById('columns').value;
            var tableContainer = document.getElementById('tableContainer');
            var statusDiv = document.getElementById('aiStatus');
            
            statusDiv.innerHTML = '<p><em>Generating AI-enhanced table...</em></p>';
            
            // Clear previous table
            tableContainer.innerHTML = '';
            
            // Create table element
            var table = document.createElement('table');
            table.border = '1';
            table.cellPadding = '10';
            
            try {
                // Use AI to generate creative cell content
                var response = await fetch("https://api.anthropic.com/v1/messages", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        model: "claude-sonnet-4-20250514",
                        max_tokens: 1000,
                        messages: [{
                            role: "user",
                            content: "Generate a JSON array of " + (rows * columns) + " short, fun facts or emojis (one per cell) for a " + rows + "x" + columns + " table. Return ONLY valid JSON array with no markdown, no preamble. Example: [\"🌟 Star\", \"🎨 Art\", \"🚀 Rocket\"]"
                        }]
                    })
                });
                
                var data = await response.json();
                var aiText = data.content[0].text.trim();
                
                // Parse AI response
                var cellContents = JSON.parse(aiText);
                var index = 0;
                
                // Create rows and columns with AI content
                for (var i = 1; i <= rows; i++) {
                    var tr = document.createElement('tr');
                    
                    for (var j = 1; j <= columns; j++) {
                        var td = document.createElement('td');
                        var aiContent = cellContents[index] || '✨';
                        td.innerHTML = '<strong>Row-' + i + ' Col-' + j + '</strong><br>' + aiContent;
                        tr.appendChild(td);
                        index++;
                    }
                    
                    table.appendChild(tr);
                }
                
                statusDiv.innerHTML = '<p style="color: green;"><strong>✓ AI-enhanced table created!</strong></p>';
                
            } catch (error) {
                // Fallback to basic table if AI fails
                statusDiv.innerHTML = '<p style="color: orange;">AI unavailable, creating basic table...</p>';
                
                for (var i = 1; i <= rows; i++) {
                    var tr = document.createElement('tr');
                    
                    for (var j = 1; j <= columns; j++) {
                        var td = document.createElement('td');
                        td.innerHTML = 'Row-' + i + ' Column-' + j;
                        tr.appendChild(td);
                    }
                    
                    table.appendChild(tr);
                }
            }
            
            tableContainer.appendChild(table);
        }