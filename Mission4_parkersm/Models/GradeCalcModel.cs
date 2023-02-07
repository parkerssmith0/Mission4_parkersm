using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_parkersm.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0, 100)]
        public byte Assignments { get; set; }
        [Range(0, 100)]
        public byte GroupProject { get; set; }
        [Range(0, 100)]
        public byte Quizzes { get; set; }
        [Range(0, 100)]
        public byte Midterm { get; set; }
        [Range(0, 100)]
        public byte FinalExam { get; set; }
        [Range(0, 100)]
        public byte Intex { get; set; }

    }
}
