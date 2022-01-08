var data = [];

        window.onload = async function () {
          await loadData();
          renderHtml(data);
        };

        const loadData = async () => {
          let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          data = await response.json();
          console.log(data);
        };

        const renderHtml = async (dataSource) => {
          const container = document.getElementById("accordionExample");
          container.innerHTML = "";

        }