// const server = require("../index");
// const  chaiHttp = require("chai-http");
// const chai = require('chai');
// const utils = require("../models/userSchema");
// const routes = require("../routes/userRoute")

// chai.should();
// chai.use(chaiHttp)

// describe("user logiin API", () => {
//     //test get resoural llimmits 

//     describe("POST api/user", () => {
//        it("it should return login user details ", (done) => {
//            const data = {
//                userEmail: "3032.jiya2@gmail.com",
//                password: "hhdsshjj&A12"
               
//            };
//            chai
//              .request(server)
//              .post("/user/login")
//              .send(data)
//              .end((err,res) => {
//                res.should.have.status(200);
//                res.should.be.a("object")
//                res.body.should.have.property("success").eq("success");
//                res.body.should.have.property("message").eq("user has Logined Successfully");
//                res.body.should.have.property("token")
//                done();
//              })
//        })
//        it("it should return error message : ", (done) => {
//          const data = {
//            userEmail: "23.jiyaraj@gmail.com",
//            password: "hhdsshjj&A12"
//          };
//          chai 
//            .request(server)
//            .post("/user/login")
//            .send(data)
//            .end((err,res) => {
//              res.should.have.status(400);
//              res.body.should.have.property("success").eq("Failed");
//              res.body.should.have.property("message").eq("you are not a valid registered user")
//              done();
//            });  
//        });
//        it("it should return email  or password error message : ", (done) => {
//          const data = {
//            userEmail: "3032.jiya2@gmail.com",
//            password: "Ughhj1233jH@"
//          };
//          chai 
//            .request(server)
//            .post("/user/login")
//            .send(data)
//            .end((err,res) => {
//              res.should.have.status(400);
//              res.body.should.have.property("success").eq("Failed");
//              res.body.should.have.property("message").eq("Email or password is not valid")
//              done();
//            });  
//        });
       
  
       
//     })
// })
// // test case for user signup API 

// describe("user signup API", () => {
//     describe("POST API/user", () => {
//         it("it will return user signup details", (done) => {
//             const data = {

//                 userName: "jiya",
//                 userEmail: "3032.qweeeee@gmail.com",
//                 password: "hhdsshjj&A12",
//                 mobileNo:  6261444006,
//                 city: "indore",
//                 state: "mp",
//                 userAddress: "ranjit  hanuman 71 "
//             }
//             chai
//                .request(server)
//                .post("/user/signup")
//                .set("Content-Type", "application/x-www-form-urlencoded")
//                .field(data)
//                .attach("profilepic", "/Users/lenovo/Downloads/WhatsApp Image 2023-01-31 at 15.07.26.jpeg", "WhatsApp Image 2023-01-31 at 15.07.26.jpeg")
//                .end((err,res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object")
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("user  has created successfully")
//                 done()
//                })
//         });
//         it("it will return user is conflict details", () => {
//             const data = {
                
//                 userName: "jiya",
//                 userEmail: "3032.jagti@gmail.com",
//                 password: "hhdsshjj&A12",
//                 mobileNo:  6261444006,
//                 city: "indore",
//                 state: "mp",
//                 userAddress: "ranjit  hanuman 71 "
//             }
//             chai
//                 .request(server)
//                 .post("/user/signup")
//                 .send(data)
//                 .end((err,res) => {
//                     res.should.have.status(409);
//                     res.body.should.have.property("success").eq("conflict")
//                     res.body.should.have.property("message").eq("user has already exist")
//                 })
//         })
//     })

// });
// // test case for sendemail API
// describe("user sendemail API", () => {
//     describe("POST API/user", () => {
//         it("it will return user  send email details ", (done) => {
//             const data = {
//                 "userEmail": "3032.jagruuti@gmail.com"
//             }
//             chai
//                 .request(server)
//                 .post("/user/reset-password")
//                 .send(data)
//                 .end((err,res) => {
//                     res.should.have.status(200);
//                     res.body.should.have.property("success").eq("success");
//                     res.body.should.have.property("message").eq("email has sent successfuly to the user")
//                     done();
//                 })

//         })

//     })

// });
// // test case for forgte password API

// describe("", () => {
//     describe("POST API/user", () => {
//         it("it return will user forgate password details", (done) => {
//             const data = {
//                 "newpassword":"hdgdsgAdd@122",
//                 "confirmpassword":"hdgdsgAdd@122"
//             }
//             chai 
//                 .request(server)
//                 .post("/user/forgate/63fede7c42b3d6372644336f/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2ZlZGU3YzQyYjNkNjM3MjY0NDMzNmYiLCJpYXQiOjE2Nzc2NDc2NDksImV4cCI6MTY3NzY0ODg0OX0.AfWklDyDE0dIwZEps2simmOF_IrF_WMSmWNZxmGcCbU")
//                 .send(data)
//                 .end((err,res) => {
//                     res.should.have.status(200);
//                     res.body.should.have.property("success").eq("success");
//                     res.body.should.have.property("message").eq("password  has sucessfully updated")
//                     done();
//                 });    
//         })

//     })

// })