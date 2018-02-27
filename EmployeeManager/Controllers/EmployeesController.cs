using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeeManager.Controllers
{
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public EmployeesController(ApplicationDbContext context)
        {
            _context = context;

            if (_context.Employees.Count() == 0)
            {
                _context.Employees.Add(new Employee
                {
                    HireDate = DateTime.Now,
                    PaymentType = 0,
                    Name = "Jimmie Gisclair",
                    PayFrequency = 2,
                    Wage = 55000,
                    JobTitle = "Software Engineer"
                });
                _context.SaveChanges();
            }
        }

        // GET: /<controller>/
        [HttpGet]
        public IActionResult Index()
        {
            var employees = _context.Employees.ToListAsync();
            return Ok(employees);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.Employees.Add(employee);
            _context.SaveChanges();

            return Ok(employee);
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var model = _context.Employees.Update(employee);
            _context.SaveChanges();

            if (model == null)
            {
                return NotFound();
            }

            return Ok(model.Entity);
        }
    }
}
