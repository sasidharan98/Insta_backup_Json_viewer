fetch('./user_data.json')
  .then(resp => resp.json())
  .then(function(data) {
    for (i = 1679; i >= 0; i--) {
      console.log(data.messages[i]);
      // console.log(data.messages[i].content);
      if (data.messages[i].sender_name == '~$rini~') {
        if (data.messages[i].hasOwnProperty('content')) {
          var myTableDiv = document.getElementById('container1');
          var table = document.createElement('TABLE');
          table.setAttribute('id', 'table1');
          var tableBody = document.createElement('TBODY');
          tableBody.setAttribute('id', 'tbody1');
          table.appendChild(tableBody);
          var tr = document.createElement('TR');
          tr.setAttribute('id', 'new');
          var profile = document.createElement('img');
          profile.setAttribute('id', 'img1');
          profile.src = './srini.jpg';
          tr.appendChild(profile);
          tr.appendChild(
            document.createTextNode(' ' + data.messages[i].content)
          );
          var time1 = document.createElement('h1');
          var date = new Date(data.messages[i].timestamp_ms);
          var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          };
          var prnDt = ' ' + new Date().toLocaleTimeString('en-us', options);
          // var full_date = (day1 +" "+ month +" "+ day +" "+ year +" "+ hour +" "+ min + " "+ sec)
          time1.appendChild(document.createTextNode(' ' + prnDt));
          tr.appendChild(time1);
          tableBody.appendChild(tr);
          myTableDiv.appendChild(table);

          // console.log(data.messages[i].content);
          // // document.getElementById("send").innerHTML = data.messages[i].content
          // var para = document.createElement("p"+i);
          // var line_br = document.createElement("br")
          // var node = document.createTextNode("srini : " + data.messages[i].content);
          // para.appendChild(node);
          // var element = document.getElementById("send");
          // element.appendChild(para);
          // element.appendChild(line_br);
        } else if (data.messages[i].hasOwnProperty('photos')) {
          console.log(data.messages[i].photos[0].uri);
        }
      }
      if (data.messages[i].sender_name == 'Other User') {
        if (data.messages[i].hasOwnProperty('content')) {
          console.log(data.messages[i].content);
          // document.getElementById("send").innerHTML = data.messages[i].content
          var myTableDiv = document.getElementById('container1');
          var table = document.createElement('TABLE');
          table.setAttribute('id', 'table2');
          var tableBody = document.createElement('TBODY');
          tableBody.setAttribute('id', 'tbody2');
          table.appendChild(tableBody);
          var tr = document.createElement('TR');
          tr.setAttribute('id', 'other');
          tr.appendChild(
            document.createTextNode(' ' + data.messages[i].content)
          );
          var profile = document.createElement('img');
          profile.src = './other_user.jpg';
          profile.setAttribute('id', 'img2');
          tr.appendChild(profile);
          var time1 = document.createElement('h1');
          var date = new Date(data.messages[i].timestamp_ms);
          // var day = date.getDate();
          // var month = date.getMonth();
          // var year = date.getFullYear();
          // var hour = date.getHours()
          // var min = date.getMinutes()
          // var sec = date.getSeconds()
          // var day1 = date.getDay()
          var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          };
          var prnDt = ' ' + new Date().toLocaleTimeString('en-us', options);
          // var full_date = (day1 +" "+ month +" "+ day +" "+ year +" "+ hour +" "+ min + " "+ sec)
          time1.appendChild(document.createTextNode(' ' + prnDt));
          tr.appendChild(time1);

          tableBody.appendChild(tr);
          myTableDiv.appendChild(table);
          // var para = document.createElement("p"+i);
          // var line_br = document.createElement("br")
          // var node = document.createTextNode("b : " + data.messages[i].content);
          // para.appendChild(node);
          // var element = document.getElementById("container darker");
          // element.appendChild(para);
          // element.appendChild(line_br);
        } else if (data.messages[i].hasOwnProperty('photos')) {
          console.log(data.messages[i].photos[0].uri);
        }
      }
    }
  });
