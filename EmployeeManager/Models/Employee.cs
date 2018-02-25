using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManager.Models
{
    public class Employee
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public float Wage { get; set; }

        public bool IsSalaried { get; set; }

        public DateTime HireDate { get; set; }

        public int PayFrequency { get; set; }

        public string JobTitle { get; set; }
    }
}
