const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function generateHTML(team) {
    const createManagerCard = (manager) => `
    <div class="card bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager</div>
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <div class="card">
                <ul class="list-group list-group-flush text-body">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office #: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`;


    module.exports = generateHTML;