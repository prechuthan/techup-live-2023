function convertProjectToHtmlCard(project) {
  const htmlCard = `
    <div class="col-xs-12 col-sm-6">
        <article data-category="${project.category}">
            <img
            src="${project.screenshot}"
            alt="Screenshot of ${project.website}"
            />
            <strong>${project.name}</strong>
            <a href="${project.website}">${project.website}</a>
            <p>${project.headline}</p>
        </article>
    </div>
    `;

  $(htmlCard).appendTo($("#techup-projects"));
}

$(async function () {
  const projects = await $.getJSON("../data/projects.json");

  await projects.map(convertProjectToHtmlCard);
});

$(function () {
  $("#techup-categories").change(function () {
    var selectedCategory = $(this).val();

    $("#techup-projects article").each(function () {
      var articleCategory = $(this).data("category");
      var parentDiv = $(this).closest("div");

      if (selectedCategory === "all" || articleCategory === selectedCategory) {
        parentDiv.show();
      } else {
        parentDiv.hide();
      }
    });
  });
});
