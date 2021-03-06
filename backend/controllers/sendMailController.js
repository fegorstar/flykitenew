const express = require('express');
const nodemailer = require("nodemailer");
require("dotenv").config();



const transporter = nodemailer.createTransport({
    host: "in-v3.mailjet.com",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});


//send Mail Controller
const sendMail = (req, res, next) =>{
    const {firstname,lastname, email, company, newselectedServices, body} = req.body;
    //HTML TEMPLATE
    const contentHTML = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns:v="urn:schemas-microsoft-com:vml">
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
        <!--[if !mso]--><!-- -->
        <link href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700' rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel="stylesheet">
        <!--<![endif]-->
    
        <title>Ragital</title>
    
        <style type="text/css">
            body {
                width: 100%;
                background-color: #ffffff;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
                mso-margin-top-alt: 0px;
                mso-margin-bottom-alt: 0px;
                mso-padding-alt: 0px 0px 0px 0px;
            }
    
            p,
            h1,
            h2,
            h3,
            h4 {
                margin-top: 0;
                margin-bottom: 0;
                padding-top: 0;
                padding-bottom: 0;
            }
    
            span.preheader {
                display: none;
                font-size: 1px;
            }
    
            html {
                width: 100%;
            }
    
            table {
                font-size: 14px;
                border: 0;
            }
            /* ----------- responsivity ----------- */
    
            @media only screen and (max-width: 640px) {
                /*------ top header ------ */
                .main-header {
                    font-size: 20px !important;
                }
                .main-section-header {
                    font-size: 28px !important;
                }
                .show {
                    display: block !important;
                }
                .hide {
                    display: none !important;
                }
                .align-center {
                    text-align: center !important;
                }
                .no-bg {
                    background: none !important;
                }
                /*----- main image -------*/
                .main-image img {
                    width: 440px !important;
                    height: auto !important;
                }
                /* ====== divider ====== */
                .divider img {
                    width: 440px !important;
                }
                /*-------- container --------*/
                .container590 {
                    width: 440px !important;
                }
                .container580 {
                    width: 400px !important;
                }
                .main-button {
                    width: 220px !important;
                }
                /*-------- secions ----------*/
                .section-img img {
                    width: 320px !important;
                    height: auto !important;
                }
                .team-img img {
                    width: 100% !important;
                    height: auto !important;
                }
            }
    
            @media only screen and (max-width: 479px) {
                /*------ top header ------ */
                .main-header {
                    font-size: 18px !important;
                }
                .main-section-header {
                    font-size: 26px !important;
                }
                /* ====== divider ====== */
                .divider img {
                    width: 280px !important;
                }
                /*-------- container --------*/
                .container590 {
                    width: 280px !important;
                }
                .container590 {
                    width: 280px !important;
                }
                .container580 {
                    width: 260px !important;
                }
                /*-------- secions ----------*/
                .section-img img {
                    width: 280px !important;
                    height: auto !important;
                }
            }
        </style>
        <!--[if gte mso 9]><style type=???text/css???>
            body {
            font-family: arial, sans-serif!important;
            }
            </style>
        <![endif]-->
    </head>
    
    
    <body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
          <!-- header -->
        <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff">
    
            <tr>
                <td align="center">
                    <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
    
                        <tr>
                            <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                        </tr>
    
                        <tr>
                            <td align="center">
    
                                <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
    
                                    <tr>
                                        <td align="center" style="height:70px;">
                                            <a href="" style=" display: block; border-style: none !important; border: 0 !important;">
                        <img width="200" border="0" style=" margin-left: 100px ,display: block; " src="https://ragital.ng/assets/img/logo.png" alt="" height="52" /></a>
                                        </td>
                                    </tr>
    
                                                              </table>
                            </td>
                        </tr>
    
                        <tr>
                            <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                        </tr>
    
                    </table>
                </td>
            </tr>
        </table>
        <!-- end header -->
    
        <!-- big image section -->
        <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">
    
            <tr>
                <td align="center">
                    <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
    
                        <tr>
                            <td align="center" style="color: #343434; font-size: 24px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 3px; line-height: 35px;"
                                class="main-header">
                                <!-- section text ======-->
    
                                <div style="line-height: 35px; text-align:left">
    
                                    Hi <span style="color: #5caad2;">Ragital,</span>
    
                                </div>
                            </td>
                        </tr>
    
                        <tr>
                            <td height="10" style="font-size: 10px; line-height: 10px;">
                &nbsp;</td>
                        </tr>
    
                        <tr>
                            <td align="center">
                                <table border="0" width="40" align="center" cellpadding="0" cellspacing="0" bgcolor="eeeeee">
                                    <tr>
                                        <td height="2" style="font-size: 2px; line-height: 2px;">
                      &nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
    
                        <tr>
                            <td height="20" style="font-size: 20px; line-height: 20px;">
                &nbsp;</td>
                        </tr>
    
                        <tr>
                            <td align="left">
                                <table border="0" width="590" align="center" cellpadding="0" cellspacing="0" class="container590">
                                    <tr>
                                        <td align="left" style="font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
                                            <!-- section text ======-->
    
                                            <p style="line-height: 24px;margin-bottom:15px;">
                                                There is a Service Request from <b> ${firstname} ${lastname}</b>.                                        </p>
                                            <p style="line-height: 24px; margin-bottom:20px;">
                                                <b>Email:</b> &nbsp; ${email}<br/> 
                                                <b>Company:</b> &nbsp; ${company}<br/> 
                                                <b>Services:</b> &nbsp; ${newselectedServices}<br/> 
                                                <b>Message:</b> &nbsp;  ${body} 
                                            </p>
                                            <table border="0" align="left" width="180" cellpadding="0" cellspacing="0" bgcolor="rgb(236, 127, 127);" style="margin-bottom:20px;">
    
                                                <tr>
                                                    <td height="10" style="font-size: 10px; line-height: 10px;">
                            &nbsp;</td>
                                                </tr>
    
                                                <tr>
                                                    <td align="center" style="color: #ffffff; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 22px; letter-spacing: 2px;">
                                                        <!-- main section button -->
    
                                                        <div style="line-height: 22px;">
                                                            <a href="https://ragital.ng" style="color: #ffffff; text-decoration: none;">Website</a>
                                                        </div>
                                                    </td>
                                                </tr>
    
                                                <tr>
                                                    <td height="10" style="font-size: 10px; line-height: 10px;">
                            &nbsp;</td>
                                                </tr>
    
                                            </table>
    
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
    
    
    
    
    
                    </table>
    
                </td>
            </tr>
    
      
        </table>
        <!-- contact section -->
        <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">
            <tr>
                <td align="center">
                    <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590 bg_color">
    
                        <tr>
                            <td align="center">
                                <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590 bg_color">
    
                                    <tr>
                                        <td>
                                            <table border="0" width="300" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                                class="container590">
    
                                                <tr>
                                                    <!-- logo -->
                                                    <td align="left">
                                                        &nbsp;</td>
                                                </tr>
    
                                                <tr>
                                                    <td height="25" style="font-size: 25px; line-height: 25px;">
                            &nbsp;</td>
                                                </tr>
    
                                                <tr>
                                                    <td align="left" style="color: #888888; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 23px;"
                                                        class="text_color">
                                                        <div style="color: #333333; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; font-weight: 600; mso-line-height-rule: exactly; line-height: 23px;">
    
                                                            Email us: <br/> <a href="mailto:" style="color: #888888; font-size: 14px; font-family: 'Hind Siliguri', Calibri, Sans-serif; font-weight: 400;">info@ragital.ng</a>
    
                                                        </div>
                                                    </td>
                                                </tr>
    
                                            </table>
    
                                            <table border="0" width="2" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                                class="container590">
                                                <tr>
                                                    <td width="2" height="10" style="font-size: 10px; line-height: 10px;"></td>
                                                </tr>
                                            </table>
    
                                            <table border="0" width="200" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                                class="container590">
    
                                                <tr>
                                                    <td class="hide" height="45" style="font-size: 45px; line-height: 45px;">
                            &nbsp;</td>
                                                </tr>
    
    
    
                                                <tr>
                                                    <td height="15" style="font-size: 15px; line-height: 15px;">
                            &nbsp;</td>
                                                </tr>
    
                                                <tr>
                                                    <td>
                                                        <table border="0" align="right" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td>
                                                                    <a href="#" style="display: block; border-style: none !important; border: 0 !important;"><img width="24" border="0" style="display: block;" src="http://i.imgur.com/Qc3zTxn.png" alt=""></a>
                                                                </td>
                                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                                <td>
                                                                    <a href=""  style="display: block; border-style: none !important; border: 0 !important;"><img width="24" border="0" style="display: block;" src="http://i.imgur.com/RBRORq1.png" alt=""></a>
                                                                </td>
                                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                               
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
    
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
    
            <tr>
                <td height="60" style="font-size: 60px; line-height: 60px;">&nbsp;</td>
            </tr>
    
        </table>
        <!-- end section -->
    
        <!-- footer ====== -->
        <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="f4f4f4">
    
            <tr>
                <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
            </tr>
    
            <tr>
                <td align="center">
    
                    <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
    
                        <tr>
                            <td>
                                <table border="0" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                    class="container590">
                                    <tr>
                                        <td align="left" style="color: #aaaaaa; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
                                            <div style="line-height: 24px;">
    
                                                <span style="color: #333333;"> &copy; Powered by Ragital.</span>
    
                                            </div>
                                        </td>
                                    </tr>
                                </table>
    
                                <table border="0" align="left" width="5" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                    class="container590">
                                    <tr>
                                        <td height="20" width="5" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                                    </tr>
                                </table>
    
                               
                            </td>
                        </tr>
    
                    </table>
                </td>
            </tr>
    
            <tr>
                <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
            </tr>
    
        </table>
        <!-- end footer ====== -->
    
    </body>
    
    </html>
 `;
 
     console.log (contentHTML);
     
 let mailOptions = {
    envelope: {
        from: "'SMTP Server' <ragital.ng>",
        to: "<hello@ragital.ng>, Mailer <hello@ragital.ng>"
    },
    subject: 'Service Request',
    html: contentHTML,
  };
 
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "Your Email was Not Sent. Try Again!",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "Your Email Was Successfully Sent!",
      });
    }
  });

 }
 module.exports= sendMail
