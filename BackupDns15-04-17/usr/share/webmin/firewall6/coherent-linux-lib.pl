# coherant-linux-lib.pl
# Deal with redhat's /etc/sysconfig/ip6tables save file and startup script

&foreign_require("init", "init-lib.pl");
$init_script = "$init::config{'init_dir'}/ip6tables";

# check_ip6tables()
# Returns an error message if something is wrong with ip6tables on this system
sub check_ip6tables
{
if (!-r $init_script) {
	return &text('coherent_escript', "<tt>$init_script</tt>");
	}
if (!$config{'done_check_ip6tables'}) {
	local $out = `$init_script status 2>&1`;
	if ($out !~ /table:|INPUT|FORWARD|OUTPUT/) {
		return &text('coherent_eoutput',
			     "<tt>$init_script status</tt>");
		}
	$config{'done_check_ip6tables'} = 1;
	&save_module_config();
	}
return undef;
}

$ip6tables_save_file = "/etc/sysconfig/ip6tables";

# apply_ip6tables()
# Applies the current ip6tables configuration from the save file
sub apply_ip6tables
{
local $out = &backquote_logged("cd / ; $init_script restart 2>&1");
$out =~ s/\033[^m]+m//g;
return $? || $out =~ /FAILED/ ? "<pre>$out</pre>" : undef;
}

# unapply_ip6tables()
# Writes the current ip6tables configuration to the save file
sub unapply_ip6tables
{
$out = &backquote_logged("cd / ; $init_script save 2>&1 </dev/null");
$out =~ s/\033[^m]+m//g;
return $? || $out =~ /FAILED/ ? "<pre>$out</pre>" : undef;
}

# started_at_boot()
sub started_at_boot
{
return &init::action_status("ip6tables") == 2;
}

sub enable_at_boot
{
&init::enable_at_boot("ip6tables");	 # Assumes init script exists
}

sub disable_at_boot
{
&init::disable_at_boot("ip6tables");
}

1;

