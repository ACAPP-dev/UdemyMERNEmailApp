module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following questions:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${process.env.REDIRECT_DOMAIN}/surveys/thanks">Yes</a>
          </div>
          <div>
            <a href="${process.env.REDIRECT_DOMAIN}/surveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
