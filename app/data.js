let interviewerQuestions = [
    /*** General Job */
    {
        questionText: "Why did you leave your last job?"
        , answers: [
            "The Marathon project came to an end. I would be idle ('on the bench') for a while."
            , "I was having some issues going on in my personal life I wanted to take some time to work on."
            , "I left Marathon on good terms - they will give me a very good recommendation."
            , "Things went well in the month and a half I took off, and I am ready to get back to work."
            , "Marathon doesn't have a project for me at the moment, so I am looking for a new git to continue my career."
        ]
    }

    , {
        questionText: "Are you willing to relocate?"
        , answers: [
            "Yes"
            , "I am going through some life changes and have been thinking about changing my living environment."
            , "I grew up in Pensacola, so I am familiar with that area of the country."
            , "I would like to be closer to the Gulf of Mexico. I miss the ocean."
            , "It's not that far from Atlanta. It's not like moving across the country."
            , "If I decided to move back to Atlanta it wouldn't be a huge deal."
        ]
    }

    , {
        questionText: "What factors will you consider to take this job?"
        , answers: [
            "Salary and Benefits"
            , "The nature of the job. I like doing heads-down development."
            , "The People: Meeting the people I will be working with."
            , "Work Atmosphere: I like working in a friendly, relaxed environment."
            , "The location - the environment I will be living in."
            , "Relocation Assistance: What will they provide?"
        ]
    }

    , {
        questionText: "Do you have any questions for me? (recruiter)"
        , answers: [
            "Why do they require on-site?"
            , "Relocation Assistance: What will they provide?"
            , "What is the benefits package like?"
            , "How big is the company?"
            , "What are the facilities like?"
            , "What is the location environment like? (city, rural, in-between)"
            , "Anything you can tell me about the nature of the job."
            , "When will the job start?"
            , "What is your position in the company?"
        ]
    }

    /*** Specific Job ***/

    /*** General Developer ***/

    , {questionText: "What is Dependency Injection?"
        , answers: [
            "Promotes loose coupling"
            , "Object receives its dependencies from an external source rather than creating them"
            , "Testability, code reusability, and maintainability"
            , "Also called Inversion of Control"
        ]
    }

    , {questionText: "What are the primary types of Dependency Injection?"
        , answers: [
            "Constructor Injection (most common)"
            , "Setter Injection"
            , "Field Injection"
            , "Interface Injection (not common)"
        ]
    }

    , {questionText: "What are Dependency Injection frameworks?"
        , answers: [
            "Tools or libraries that automate the process of Dependency Injection"
            , "Provides lifecycle management: creation, destruction, and scope"
            , "For .NET Core the default for C# is Microsoft.Extensions.DependencyInjection "
        ]
    }

    , {questionText: "What is SOLID?"
        , answers: [
            "5 principles for good object-oriented code."
            , "Clean"
            , "Testable"
            , "Maintainable"
            , "Scalable"
        ]
    }

    , {questionText: "What does the SOLID acronym stand for?"
        , answers: [
            "Single Responsibility"
            , "Open for Extension / Closed for Modification"
            , "Liskov Substitution Principle"
            , "Interface Segregation Principle"
            , "Dependency Inversion Principle"
        ]
    }

    , {questionText: "What are Design Patterns?"
        , answers: []
    }

    , {questionText: "What is MVVM?"
        , answers: []
    }

    , {questionText: "What techniques exist for Application Performance Monitoring?"
        , answers: []
    }

    , {questionText: "What techniques exist for Application Performance Optimization??"
        , answers: []
    }

    , {questionText: "What techniques exist for Application Troubleshooting?"
        , answers: []
    }

    , {questionText: "What is Scalability?"
        , answers: []
    }

    , {questionText: "What techniques exist for High Availability?"
        , answers: []
    }

    , {questionText: "What is Test-Driven Development?"
        , answers: []
    }

    , {questionText: "What is Behavior-Driven Development?"
        , answers: []
    }

    /*** Testing Tools */

    , {questionText: "What is Gherkin?"
        , answers: []
    }

    , {questionText: "What is SpecFlow?"
        , answers: []
    }

    , {questionText: "What is Cucumber?"
        , answers: []
    }

    , {questionText: "What is NUnit?"
        , answers: []
    }

    , {questionText: "What is xUnit?"
        , answers: []
    }

    /*** .NET MAUI ***/

    , {questionText: "What is .NET MAUI?"
        , answers: []
    }

    /*** React ***/

    , {
        questionText: "What is React?"
        , answers: [
            "JavaScript framework"
            , "Build dynamic user interfaces in web applications"
            , "Reusable components"
            , "Manages application state"
            , "Rerenders UI in response to data changes"
            , "Uses JSX markup language"
        ]
    }
    , {
        questionText: "What is JSX?"
        , answers: [
            "HTML-like language for React"
            , "Can combine with ordinary HTML"
            , "Component names are tag names"
        ]
    }

    /*** ETL ***/
    , {
        questionText: "What does ETL stand for?"
        , answers: [
            "Extract"
            , "Transform"
            , "Load"
        ]
    }

    , {
        questionText: "What is ETL for?"
        , answers: [
            "Retrieve data from one or more source systems"
            , "Apply operations to the source, such as cleaning, filtering, standardizing, or combining data from different sources. This step ensures the data is structured and prepared for its intended use."
            , "Move the transformed data to the target system"
        ]
    }

    , {
        questionText: "What ETL operations are performed on the Transform step?"
        , answers: [
            "Cleaning"
            , "Formatting"
            , "Standardizing"
            , "Filtering"
            , "Combining"
        ]
    }

    /*** SQL ***/

    , {
        questionText: "What does SQL stand for?"
        , answers: [
            "Structured Query Language"
        ]
    }

    /*** NoSQL ***/

    , {
        questionText: "What is NoSQL?"
        , answers: []
    }

    /*** Data Warehouse ***/

    , {
        questionText: "What is a data warehouse?"
        , answers: [
            "Centralized repository of large amounts of data"
            , "The data can come from multiple sources"
            , "Optimized for querying and analysis rather than transaction processing"
        ]
    }
 
    /*** Blazor ***/

    , {
        questionText: "What is Blazor?"
        , answers: [
            "For building website front ends"
            , "Creates single-page applications"
            , "Uses C# and .NET instead of JavaScript"
        ]
    }

    , {
        questionText: "What are the two main hosing models for Blazor?"
        , answers: [
            "Blazer Server"
            , "Blazor WebAssembly"
        ]
    }

    /*** ASP.NET ***/

    , {
        questionText: "What is ASP.NET?"
        , answers: [
            "Microsoft platform for building web applications and services"
            , "Uses C# or VB.NET"
            , "Has cross-platform support"
        ]
    }

    /*** RESTful API ***/

    , {
        questionText: "What is a RESTful API?"
        , answers: []
    }

    /*** MicroServices Architecture ***/

    , {
        questionText: "What is a MicroServices Architecture?"
        , answers: []
    }

    /*** .NET ***/

    , {
        questionText: "What is .NET?"
        , answers: []
    }

    /*** PostgreSQL ***/

    , {
        questionText: "What is PostgreSQL?"
        , answers: []
    }

    /*** MongoDB ***/

    , {
        questionText: "What is MongoDB?"
        , answers: []
    }

    /*** Docker ***/

    , {
        questionText: "What is Docker?"
        , answers: []
    }

    /*** Kubernetes ***/

    , {
        questionText: "What is Kubernetes?"
        , answers: []
    }

    /*** CI/CD ***/

    , {
        questionText: "What is CI/CD?"
        , answers: []
    }

    /*** Agile ***/

    , {
        questionText: "What is Agile?"
        , answers: []
    }

    /*** Git ***/

    , {
        questionText: "What is Git?"
        , answers: []
    }

    /*** JavaScript ***/

    , {
        questionText: "What is JavaScript?"
        , answers: []
    }

    /*** Node.js ***/

    , {
        questionText: "What is Node.js?"
        , answers: []
    }

    /*** Angular ***/

    , {
        questionText: "What is Angular?"
        , answers: []
    }

    /*** Vue ***/

    , {
        questionText: "What is Vue?"
        , answers: []
    }

    /*** Python ***/

    , {
        questionText: "What is Python?"
        , answers: []
    }

    /*** AWS ***/

    , {
        questionText: "What is AWS?"
        , answers: []
    }

    /*** C# ***/

    , {
        questionText: "What is C#?"
        , answers: []
    }

    /*** MySQL ***/

    , {
        questionText: "What is MySQL?"
        , answers: []
    }

    /*** CSS ***/

    , {
        questionText: "What is CSS?"
        , answers: []
    }

    /*** JQuery ***/

    , {
        questionText: "What is JQuery?"
        , answers: []
    }

    /*** Web Services ***/

    , {
        questionText: "What are Web Services?"
        , answers: []
    }

    /*** DevOps ***/

    , {
        questionText: "What are DevOps?"
        , answers: []
    }
    , {
        questionText: "Name some Code Quality Tools?"
        , answers: []
    }

    /*** Website Security ***/

    , {
        questionText: "What are some Website Security issues?"
        , answers: []
    }

    /*** Progress Technology ***/

    , {
        questionText: "What is Progress Technology?"
        , answers: []
    }

    /*** Sitefinity ***/

    , {
        questionText: "What is Sitefinity?"
        , answers: []
    }

    /*** DevCraft Complete ***/

    , {
        questionText: "What is DevCraft Complete?"
        , answers: []
    }

    /*** Kendo Blazor ***/

    , {
        questionText: "What is Kendo Blazor?"
        , answers: []
    }

    /*** Google Cloud ***/

    , {
        questionText: "What is Google Cloud?"
        , answers: []
    }

    /*** Azure Cloud ***/

    , {
        questionText: "What is Azure Cloud?"
        , answers: []
    }

    , {
        questionText: "What are Azure Cloud Services?"
        , answers: []
    }

    /*** Business Analysis ***/

    , {
        questionText: "What does Business Analysis refer to in a software development context?"
        , answers: []
    }

    /*** SDLC ***/

    , {
        questionText: "What is SDLC?"
        , answers: []
    }

    /*** Visual Studio ***/

    , {
        questionText: "What is Visual Studio?"
        , answers: []
    }

    /*** Debugging ***/

    , {
        questionText: "What is Debugging?"
        , answers: []
    }
];