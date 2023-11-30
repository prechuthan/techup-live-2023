function convertProjectToHtmlCard(project) {
  const htmlCard = `
    <div class="col-xs-12 col-sm-6">
        <article>
            <img
            src="${project.screenshot}"
            alt="Screenshot of ${project.website}"
            />
            <a href="${project.website}">${project.website}</a>
            <p>
            ${project.description}
            </p>
        </article>
    </div>
    `;

  $(htmlCard).appendTo($("#techup-projects"));
}

$(async function () {
  const projects = await $.getJSON("../data/projects.json");

  await projects.map(convertProjectToHtmlCard);
});
