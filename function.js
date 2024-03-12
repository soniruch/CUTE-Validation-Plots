
function plot_series(series){
    
    document.getElementById('header').innerHTML = 'Series: ' + series;

     document.getElementById('amp_chisq_1').setAttribute('src', '/images/' + series + '/zip1/' + series + '_amp_chisq_1.png');
    document.getElementById('pt_amp_1').setAttribute('src', 'images/' + series + '/zip1/' + series + '_amp_pt_1.png');
    document.getElementById('pt_amp_chan_1').setAttribute('src', 'images/' + series + '/zip1/' + series + '_amp_spectrum_combined_1.png');
    document.getElementById('noise_fft_1').setAttribute('src', 'images/' + series + '/zip1/' + series + '_pt_noise_fft_1.png');
    document.getElementById('noise_psd_1').setAttribute('src', 'images/' + series + '/zip1/'+ series + '_pt_noise_psd_1.png');
    document.getElementById('temp_im_1').setAttribute('src', 'images/' + series + '/zip1/'+ series + '_pt_temp_im_1.png');
    document.getElementById('temp_re_1').setAttribute('src', 'images/' + series + '/zip1/' + series + '_pt_temp_re_1.png');

    
    document.getElementById('amp_chisq_2').setAttribute('src', 'images/' + series + '/zip2/' + series + '_amp_chisq_2.png');
    document.getElementById('pt_amp_2').setAttribute('src', 'images/' + series + '/zip2/' + series + '_amp_pt_2.png');
    document.getElementById('pt_amp_chan_2').setAttribute('src', 'images/' + series + '/zip2/' + series + '_amp_spectrum_combined_2.png');
    document.getElementById('noise_fft_2').setAttribute('src', 'images/' + series + '/zip2/' + series + '_pt_noise_fft_2.png');
    document.getElementById('noise_psd_2').setAttribute('src', 'images/' + series + '/zip2/'+ series + '_pt_noise_psd_2.png');
    document.getElementById('temp_im_2').setAttribute('src', 'images/' + series + '/zip2/'+ series + '_pt_temp_im_2.png');
    document.getElementById('temp_re_2').setAttribute('src', 'images/' + series + '/zip2/' + series + '_pt_temp_re_2.png');

    
    document.getElementById('amp_chisq_3').setAttribute('src', 'images/' + series + '/zip3/' + series + '_amp_chisq_3.png');
    document.getElementById('pt_amp_3').setAttribute('src', 'images/' + series + '/zip3/' + series + '_amp_pt_3.png');
    document.getElementById('pt_amp_chan_3').setAttribute('src', 'images/' + series + '/zip3/' + series + '_amp_spectrum_combined_3.png');
    document.getElementById('noise_fft_3').setAttribute('src', 'images/' + series + '/zip3/' + series + '_pt_noise_fft_3.png');
    document.getElementById('noise_psd_3').setAttribute('src', 'images/' + series + '/zip3/'+ series + '_pt_noise_psd_3.png');
    document.getElementById('temp_im_3').setAttribute('src', 'images/' + series + '/zip3/'+ series + '_pt_temp_im_3.png');
    document.getElementById('temp_re_3').setAttribute('src', 'images/' + series + '/zip3/' + series + '_pt_temp_re_3.png');

    
    document.getElementById('amp_chisq_5').setAttribute('src', 'images/' + series + '/zip5/' + series + '_amp_chisq_5.png');
    document.getElementById('pt_amp_5').setAttribute('src', 'images/' + series + '/zip5/' + series + '_amp_pt_5.png');
    document.getElementById('pt_amp_chan_5').setAttribute('src', 'images/' + series + '/zip5/' + series + '_amp_spectrum_combined_5.png');
    document.getElementById('noise_fft_5').setAttribute('src', 'images/' + series + '/zip5/' + series + '_pt_noise_fft_5.png');
    document.getElementById('noise_psd_5').setAttribute('src', 'images/' + series + '/zip5/'+ series + '_pt_noise_psd_5.png');
    document.getElementById('temp_im_5').setAttribute('src', 'images/' + series + '/zip5/'+ series + '_pt_temp_im_5.png');
    document.getElementById('temp_re_5').setAttribute('src', 'images/' + series + '/zip5/' + series + '_pt_temp_re_5.png');

    
    document.getElementById('amp_chisq_6').setAttribute('src', 'images/' + series + '/zip6/' + series + '_amp_chisq_6.png');
    document.getElementById('pt_amp_6').setAttribute('src', 'images/' + series + '/zip6/' + series + '_amp_pt_6.png');
    document.getElementById('pt_amp_chan_6').setAttribute('src', 'images/' + series + '/zip6/' + series + '_amp_spectrum_combined_6.png');
    document.getElementById('noise_fft_6').setAttribute('src', 'images/' + series + '/zip6/' + series + '_pt_noise_fft_6.png');
    document.getElementById('noise_psd_6').setAttribute('src', 'images/' + series + '/zip6/'+ series + '_pt_noise_psd_6.png');
    document.getElementById('temp_im_6').setAttribute('src', 'images/' + series + '/zip6/'+ series + '_pt_temp_im_6.png');
    document.getElementById('temp_re_6').setAttribute('src', 'images/' + series + '/zip6/' + series + '_pt_temp_re_6.png');

}


