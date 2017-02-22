using Microsoft.AspNetCore.Mvc;

namespace famousNote.Api
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class ChallengesController : Controller
    {
        [HttpGet]
        [Route("{type}")]
        public IActionResult Get([FromRoute]string type = null)
        {
            dynamic challenges = null;
            if (type == "opened")
            {
                challenges = new dynamic[]
                {
                    new {
                        id = 1,
                        title = "face of the earth",
                        note = "I am the dumpest person on the face of the earth"
                    }
                };
            }
            else if (type == "current")
            {
                challenges = new dynamic[]
                {
                    new {
                        id = 1,
                        challenge = new {
                            id = 1,
                            title = "face of the earth",
                            note = "I am the dumpest person on the face of the earth"
                        },
                        note="he's just disappeared off the face of the earth",
                    }
                };
            }
            else if (type == "closed")
            {
                return NotFound();
            }
            else
            {
                return NotFound();
            }

            return Ok(challenges);
        }
    }
}
