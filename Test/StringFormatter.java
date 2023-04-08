

class StringFormatter {

    public static void main(String[] args) {

        String toFormat = "Crime related death or disappearance of a child leave ~ NS LSC s.60  Disappearance of a Child  If an employee has been employed by an employer for a minimum of 3-months and their child disappears under circumstances that suggest they may have been the victim of a crime, the employee is entitled to up to 52 weeks of unpaid leave of absence.  This leave can only be taken during the 53-week period beginning the week in which the child disappears, and can only be taken as a single continuous period.  An employee is not entitled to a leave of absence if they have been charged with the crime with respect to which the leave was granted.  The employee must advise their employer in writing as soon as possible of any intention to take a leave of absence, and provide a written plan indicating the weeks in which the leave will be taken.  If the employee must begin the leave before advising their employer, they must do so as soon as possible.  An employer may require an employee who takes a leave under these provisions to provide evidence, reasonable in the circumstances, of their entitlement to the leave.  If a child is found within the 52-week period beginning the week they disappear, and the employee has taken a leave under these provisions, the employee is entitled to continue taking leave for 14 days after the child is found alive.  If the child is found dead, the employee is entitled to take an additional 104 weeks of unpaid leave from the day the child is found dead, and any remaining leave under the provisions for child disappearance ends.  If an employee wishes to take a leave at a time other than that indicated in the plan provided to the employer, they may do so if they request permission to do so in writing and the employer grants permission in writing, or  if they provide the employer with four weeks' written notice before the change is to take place.  Death of Child  If an employee has been employed by an employer for a minimum of 3-months and their child dies, the employee is entitled to up to 104 weeks of unpaid leave of absence.  This leave can only be taken during the 105-week period beginning the week in which the child is found dead, and can only be taken as a single continuous period.  If the circumstances change and it no longer seems probable that the child's death or disappearance was the result of a crime, the employee's leave ends no later than 14 days following the day on which it no longer seems probable, unless the employee and employer agree in writing to an earlier return to work.  The employee must provide written notice to the employer as soon as possible that the leave is ending.  If an employee wishes to take a leave at a time other than that indicated in the plan provided to the employer, they may do so if they request permission to do so in writing and the employer grants permission in writing, or  if they provide the employer with four weeks' written notice before the change is to take place.";

        System.out.println(format(toFormat)); // Display the string.
    }

    public static String format(String input) {
        StringBuilder output = new StringBuilder();
        String[] lines = input.split("\n");
        for (String line : lines) {
            if (line.trim().startsWith("-") || line.trim().startsWith("*")) {
                output.append("<li>").append(line.trim().substring(1).trim()).append("</li>");
            } else if (line.trim().startsWith("If ") || line.trim().startsWith("When ") || line.trim().startsWith("Where ")) {
                output.append("<p><b>").append(line.trim()).append("</b></p>");
            } else {
                output.append("<p>").append(line.trim()).append("</p>");
            }
        }
        return output.toString();
    }
    
}