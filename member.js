function skillsMember()
{
    var member = new Object();
    member.name = "John";
    member.age = 25;
    member.skills = ["JavaScript", "HTML", "CSS"];
    member.address = {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    };
    member.showSkills = function() {
        var skills = this.skills;
        skills.forEach(function(skill) {
            console.log(skill);
        });
    };
    return member;
}
